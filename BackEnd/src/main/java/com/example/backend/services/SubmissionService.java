package com.example.backend.services;

import com.example.backend.entites.Submission;

import java.util.List;

public interface SubmissionService {
    void saveSubmission(Submission submission, Long sessionId);
    List<Submission> getAllSubmissions();
    Submission getSubmissionById(Long submissionId);
    void deleteSubmission(Long submissionId);
}
