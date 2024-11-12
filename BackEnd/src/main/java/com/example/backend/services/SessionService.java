package com.example.backend.services;

import com.example.backend.dtos.SessionDTO;
import com.example.backend.entites.Session;

import java.util.List;

public interface SessionService {
    void saveSession(Session session, Long challengeId, Long classroomId);
    List<Session> getAllSessions();

    List<SessionDTO> getSessionsDTOByClassroomId(Long classroomId);
    Session getSessionById(Long sessionId);
    void deleteSession(Long sessionId);
}
