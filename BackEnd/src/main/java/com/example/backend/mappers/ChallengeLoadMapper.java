package com.example.backend.mappers;

import com.example.backend.dtos.ChallengeLoadDTO;
import com.example.backend.entites.Challenge;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ChallengeLoadMapper {

    // Method to map Challenge entity to ChallengeLoadDTO
    public ChallengeLoadDTO convertToChallengeLoadDTO(Challenge challenge) {
        ChallengeLoadDTO challengeLoadDTO = new ChallengeLoadDTO();
        challengeLoadDTO.setTitle(challenge.getTitle());
        challengeLoadDTO.setDescription(challenge.getDescription());
        challengeLoadDTO.setTemplateName(challenge.getTemplateName());

        // Parse challengeData to extract questions
        String challengeData = challenge.getChallengeData();
        List<Map<String, Object>> questions = parseChallengeData(challengeData);
        challengeLoadDTO.setQuestions(questions);

        return challengeLoadDTO;
    }

    // Method to parse challengeData (JSON string) into List<Map<String, Object>> (questions)
    private List<Map<String, Object>> parseChallengeData(String challengeData) {
        List<Map<String, Object>> questionsList = new ArrayList<>();
        System.out.println("challengeData: " + challengeData);

        try {
            // Convert challengeData string to a JSONObject
            JSONObject json = new JSONObject(challengeData);
            JSONArray questionsArray = json.getJSONArray("questions");

            // Loop through the questions array and create the list of questions
            for (int i = 0; i < questionsArray.length(); i++) {
                JSONObject questionObject = questionsArray.getJSONObject(i);

                // Add each question to the list as a Map without diving deeper into the 'question' field
                Map<String, Object> questionMap = Map.of(
                        "title", questionObject.getString("title"),
                        "question", questionObject.get("question") // Keep the whole question as is
                );
                questionsList.add(questionMap);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Log properly instead of printing
            // In case of error, return an empty list or handle as appropriate
            return new ArrayList<>(); // Returning an empty list instead of null
        }

        return questionsList;
    }
}
