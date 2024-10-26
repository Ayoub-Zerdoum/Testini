package com.example.backend.services;

import com.example.backend.entites.Session;

import java.util.List;

public interface SessionService {
    void saveSession(Session session, Long challengeId, Long classroomId);
    List<Session> getAllSessions();
    Session getSessionById(Long sessionId);
    void deleteSession(Long sessionId);
}
