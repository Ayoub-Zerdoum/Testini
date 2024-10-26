package com.example.backend.services.ServiceImpl;

import com.example.backend.entites.Challenge;
import com.example.backend.entites.Instructor;
import com.example.backend.repositoris.ChallengeRepository;
import com.example.backend.repositoris.InstructorRepository;
import com.example.backend.services.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ChallengeServiceImpl implements ChallengeService {
    private final ChallengeRepository challengeRepository;
    private final InstructorRepository instructorRepository; // Inject the Instructor repository

    @Override
    public void saveChallenge(Challenge challenge, Long instructorId) {
        // Find the instructor by ID
        Optional<Instructor> instructorOptional = instructorRepository.findById(instructorId);
        if (instructorOptional.isPresent()) {
            // Set the instructor to the challenge
            challenge.setInstructorCH(instructorOptional.get());
            // Save the challenge
            challengeRepository.save(challenge);
        } else {
            throw new IllegalArgumentException("Instructor not found with ID: " + instructorId);
        }
    }

    @Override
    public List<Challenge> getAllChallenges() {
        // Retrieve and return all challenges
        return challengeRepository.findAll();
    }

    @Override
    public Challenge getChallengeById(Long challengeId) {
        // Find the challenge by ID
        return challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("Challenge not found with ID: " + challengeId));
    }

    @Override
    public void deleteChallenge(Long challengeId) {
        // Check if the challenge exists before attempting to delete
        if (challengeRepository.existsById(challengeId)) {
            challengeRepository.deleteById(challengeId);
        } else {
            throw new IllegalArgumentException("Challenge not found with ID: " + challengeId);
        }
    }
}
