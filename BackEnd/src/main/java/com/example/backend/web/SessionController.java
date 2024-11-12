package com.example.backend.web;

import com.example.backend.dtos.SessionDTO;
import com.example.backend.mappers.SessionMapper;
import com.example.backend.services.SessionService;


import com.example.backend.entites.Session;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
        long a=1L;
        return ResponseEntity.ok(sessionService.getSessionsDTOByClassroomId(a));
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

    @GetMapping("/{classroomId}/sessions")
    public ResponseEntity<List<SessionDTO>> getSessionsByClassroomId(@PathVariable Long classroomId) {
        try {
            // Fetch the sessions from the service layer
            List<SessionDTO> sessionDTOS = sessionService.getSessionsDTOByClassroomId(classroomId);

            // Return the response with the list of sessions
            return ResponseEntity.ok(sessionDTOS);
        } catch (EntityNotFoundException ex) {
            // If classroom not found, return 404
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception ex) {
            // Handle any other unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}



