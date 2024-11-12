package com.example.backend.services.ServiceImpl;

import com.example.backend.dtos.MergeDTO;
import com.example.backend.dtos.Result;
import com.example.backend.dtos.SessionDTO;
import com.example.backend.entites.*;
import com.example.backend.mappers.SessionMapper;
import com.example.backend.repositoris.SessionRepository;
import com.example.backend.repositoris.ChallengeRepository;
import com.example.backend.repositoris.ClassroomRepository;
import com.example.backend.services.SessionService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.*;

@Service
@Transactional
@RequiredArgsConstructor
public class SessionServiceImpl implements SessionService {
    private final SessionRepository sessionRepository;
    private final ChallengeRepository challengeRepository;
    private final ClassroomRepository classroomRepository;
    private final SessionMapper sessionMapper;

    @Override
    public void saveSession(Session session, Long challengeId, Long classroomId) {
        Optional<Challenge> challengeOptional = challengeRepository.findById(challengeId);
        Optional<Classroom> classroomOptional = classroomRepository.findById(classroomId);

        if (challengeOptional.isPresent() && classroomOptional.isPresent()) {
            session.setChallengeSH(challengeOptional.get());
            session.setClassroomSH(classroomOptional.get());
            sessionRepository.save(session);
        } else {
            throw new IllegalArgumentException("Challenge or Classroom not found.");
        }
    }

    @Override
    public List<Session> getAllSessions() {
        return sessionRepository.findAll();

    }




    @Override
    public List<SessionDTO> getSessionsDTOByClassroomId(Long classroomId) {


        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new EntityNotFoundException("Classroom not found with id: " + classroomId));

        List<Session> sessions = classroom.getSession();
        List<Merge> merges = classroom.getMergingDetails();

        // Mapping individual Session to SessionDTO
        List<SessionDTO> sessionDTOS = sessions.stream()
                .map(sessionMapper::toSessionDTO)
                .collect(Collectors.toList());

        // Process each Merge object
        for (Merge merge : merges) {
            List<Session> mergedSessions = merge.getIdSessions().stream()
                    .map(sessionRepository::findById)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .collect(Collectors.toList());

            // Get all student emails involved in these sessions
            Set<String> allStudentEmails = mergedSessions.stream()
                    .flatMap(session -> session.getSubmissions().stream())
                    .map(Submission::getStudentEmail)
                    .collect(Collectors.toSet());

            List<Result> mergedResults = new ArrayList<>();

            // For each student, calculate the score based on the operation
            for (String studentEmail : allStudentEmails) {
                List<Double> scores = new ArrayList<>();

                // Collect each student's scores for each session in the merge
                for (Session session : mergedSessions) {
                    session.getSubmissions().stream()
                            .filter(submission -> submission.getStudentEmail().equals(studentEmail))
                            .map(Submission::getScore)
                            .findFirst()
                            .ifPresentOrElse(
                                    scores::add,
                                    () -> scores.add(0.0) // Assign 0 if no submission for this session
                            );
                }

                // Calculate the final score based on the specified operation
                double score = 0;
                switch (merge.getOperation()) {
                    case MAX -> score = scores.stream().mapToDouble(Double::doubleValue).max().orElse(0.0);
                    case AVG -> {
                        double sum = scores.stream().mapToDouble(Double::doubleValue).sum();
                        score = scores.size() > 0 ? sum / scores.size() : 0.0;
                    }
                    case COEFS -> {
                        int totalCoef = merge.getCoefSessions().stream().mapToInt(Integer::intValue).sum();
                        score = IntStream.range(0, scores.size())
                                .mapToDouble(i -> scores.get(i) * merge.getCoefSessions().get(i) / (double) totalCoef)
                                .sum();
                    }
                }

                Result result = new Result(null, score, studentEmail);
                mergedResults.add(result);
            }

            // Add merged results to a new SessionDTO for merged sessions
            SessionDTO mergedSessionDTO = new SessionDTO();
            mergedSessionDTO.setTitle(merge.getTitle());
            mergedSessionDTO.setResults(mergedResults);
            sessionDTOS.add(mergedSessionDTO);
        }

        return sessionDTOS;

    }



    @Override
    public Session getSessionById(Long sessionId) {
        return sessionRepository.findById(sessionId)
                .orElseThrow(() -> new IllegalArgumentException("Session not found with ID: " + sessionId));
    }

    @Override
    public void deleteSession(Long sessionId) {
        if (sessionRepository.existsById(sessionId)) {
            sessionRepository.deleteById(sessionId);
        } else {
            throw new IllegalArgumentException("Session not found with ID: " + sessionId);
        }
    }
}
