import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private apiUrl = 'http://localhost:8080/api/challenges'; // Adjust if needed

  constructor(private http: HttpClient) {}

  createEmptyChallenge(instructorId: number): Observable<any> {
    const url = `${this.apiUrl}/empty?instructorId=${instructorId}`; // Assuming the API expects instructorId as a query param
    return this.http.post(url, {});
  }

  // Save the updated challenge data
  saveChanges(
    challengeName: string, 
    challengeDesc: string, 
    selectedTemplate: string, 
    questions: any[], 
    instructorId: number
  ): Observable<any> {
    // Format the current date in 'yyyy-MM-dd HH:mm:ss' format
    const formattedDate = new Date()
    // Construct the challenge JSON (without instructorId inside)
    const challengeData = {
      title: challengeName,
      description: challengeDesc,
      challengeData: JSON.stringify({ questions }), // JSON.stringify for complex data like questions
      templateName: selectedTemplate,
      status: 'IN_PROGRESS',  // Status is always "IN_PROGRESS" when creating
      createdAt: formattedDate, // Use the current date and time for creation in the correct format
    };
  
    // Make the HTTP request to save the challenge (send instructorId as a URL parameter)
    return this.http.post(`${this.apiUrl}?instructorId=${instructorId}`, challengeData);
  }
}
