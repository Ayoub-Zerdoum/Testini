package com.example.backend.services;


import com.example.backend.entites.Challenge;

import java.util.List;

public interface ChallengeService {
    void saveChallenge(Challenge challenge, Long instructorId) ;
    List<Challenge> getAllChallenges();
    Challenge getChallengeById(Long challengeId);
    void deleteChallenge(Long challengeId);
}