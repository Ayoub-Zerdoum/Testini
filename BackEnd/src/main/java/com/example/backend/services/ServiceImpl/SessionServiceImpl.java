package com.example.backend.services.ServiceImpl;

import com.example.backend.entites.Session;
import com.example.backend.entites.Challenge;
import com.example.backend.entites.Classroom;
import com.example.backend.repositoris.SessionRepository;
import com.example.backend.repositoris.ChallengeRepository;
import com.example.backend.repositoris.ClassroomRepository;
import com.example.backend.services.SessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class SessionServiceImpl implements SessionService {
    private final SessionRepository sessionRepository;
    private final ChallengeRepository challengeRepository;
    private final ClassroomRepository classroomRepository;

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
