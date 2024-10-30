package com.example.backend.mappers;



import com.example.backend.dtos.SessionDTO;
import com.example.backend.dtos.SubmessionDTO;
import com.example.backend.entites.Session;
import com.example.backend.entites.Submission;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SessionMapper {

    public SessionDTO toSessionDTO(Session session) {
        List<SubmessionDTO> submissionDTOs = session.getSubmissions().stream()
                .map(this::toSubmissionDTO)
                .collect(Collectors.toList());
        
        return new SessionDTO(
                session.getId(),
                session.getTitle(),
                submissionDTOs
        );
    }

    private SubmessionDTO toSubmissionDTO(Submission submission) {
        return new SubmessionDTO(
                submission.getId(),
                submission.getScore(),
                submission.getStudentEmail()
        );
    }
}
