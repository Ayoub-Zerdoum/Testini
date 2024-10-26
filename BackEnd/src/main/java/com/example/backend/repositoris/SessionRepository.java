package com.example.backend.repositoris;

import com.example.backend.entites.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SessionRepository extends JpaRepository<Session, Long> {
    List<Session> findByChallengeSHId(Long challengeId); // To find sessions by challenge ID
}
