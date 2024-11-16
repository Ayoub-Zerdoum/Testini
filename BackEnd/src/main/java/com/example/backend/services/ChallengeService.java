package com.example.backend.services;


import com.example.backend.entites.Challenge;

import java.util.List;

public interface ChallengeService {
    Challenge createEmptyChallenge(Long instructorId);

    void saveChallenge(Challenge challenge, Long instructorId) ;

    // Modified method to get challenge by id and validate the instructorId
    Challenge getChallengeByIdWithInstructor(Long challengeId, Long instructorId);

    List<Challenge> getAllChallenges();
    Challenge getChallengeById(Long challengeId);
    void deleteChallenge(Long challengeId);
}