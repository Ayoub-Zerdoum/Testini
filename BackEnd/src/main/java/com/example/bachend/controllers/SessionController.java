package com.example.bachend.controllers;

import com.example.backend.services.SessionService;

import DTO.SessionDTO;
import Mapper.SessionMapper;

import com.example.backend.entites.Session;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sessions")
@CrossOrigin("*")
public class SessionController {

    private final SessionService sessionService;
    private final SessionMapper sessionMapper;

    // Récupérer toutes les sessions et les transformer en DTO
    @GetMapping("/all")
    public ResponseEntity<List<SessionDTO>> getAllSessions() {
        List<Session> sessions = sessionService.getAllSessions();
        List<SessionDTO> sessionDTOs = sessions.stream()
                .map(sessionMapper::toSessionDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(sessionDTOs);
    }

    // Récupérer une session par ID et la transformer en DTO
    @GetMapping("/{id}")
    public ResponseEntity<SessionDTO> getSessionById(@PathVariable Long id) {
        Session session = sessionService.getSessionById(id);
        SessionDTO sessionDTO = sessionMapper.toSessionDTO(session);
        return ResponseEntity.ok(sessionDTO);
    }

    // Créer une nouvelle session
    @PostMapping
    public ResponseEntity<Void> createSession(@RequestBody Session session,
                                              @RequestParam Long challengeId,
                                              @RequestParam Long classroomId) {
        sessionService.saveSession(session, challengeId, classroomId);
        return ResponseEntity.ok().build();
    }

    // Supprimer une session par ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSession(@PathVariable Long id) {
        sessionService.deleteSession(id);
        return ResponseEntity.ok().build();
    }

    // Endpoint to return a static integer value (for testing or simple check)
    @GetMapping("/int")
    public ResponseEntity<Integer> inte() {
        return ResponseEntity.ok(1);
    }
}
