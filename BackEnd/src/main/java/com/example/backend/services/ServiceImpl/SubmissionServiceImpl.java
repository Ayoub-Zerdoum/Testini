package com.example.backend.services.ServiceImpl;

import com.example.backend.entites.Submission;
import com.example.backend.entites.Session;
import com.example.backend.repositoris.SubmissionRepository;
import com.example.backend.repositoris.SessionRepository;
import com.example.backend.services.SubmissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class SubmissionServiceImpl implements SubmissionService {
    private final SubmissionRepository submissionRepository;
    private final SessionRepository sessionRepository;

    @Override
    public void saveSubmission(Submission submission, Long sessionId) {
        Optional<Session> sessionOptional = sessionRepository.findById(sessionId);
        if (sessionOptional.isPresent()) {
            submission.setSessionSB(sessionOptional.get());
            submissionRepository.save(submission);
        } else {
            throw new IllegalArgumentException("Session not found with ID: " + sessionId);
        }
    }

    @Override
    public List<Submission> getAllSubmissions() {
        return submissionRepository.findAll();
    }

    @Override
    public Submission getSubmissionById(Long submissionId) {
        return submissionRepository.findById(submissionId)
                .orElseThrow(() -> new IllegalArgumentException("Submission not found with ID: " + submissionId));
    }

    @Override
    public void deleteSubmission(Long submissionId) {
        if (submissionRepository.existsById(submissionId)) {
            submissionRepository.deleteById(submissionId);
        } else {
            throw new IllegalArgumentException("Submission not found with ID: " + submissionId);
        }
    }
}
