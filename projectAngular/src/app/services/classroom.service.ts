// src/app/services/classroom.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassroomDTO } from '../entities/ClassroomDTO';
import { ClassroomUpdateSaveDTO } from '../entities/ClassroomUpdateSaveDTO';

@Injectable({
    providedIn: 'root',
})
export class ClassroomService {
    private apiUrl = 'http://localhost:8080/api/classrooms';

    constructor(private http: HttpClient) { }

    // Save a new classroom
    saveClassroom(classroom: ClassroomUpdateSaveDTO, instructorId: number): Observable<string> {
        const params = new HttpParams().set('instructorId', instructorId.toString());
        return this.http.post<string>(this.apiUrl, classroom, { params });
    }

    // Update an existing classroom
    updateClassroom(id: number, classroom: ClassroomUpdateSaveDTO): Observable<string> {
        return this.http.put<string>(`${this.apiUrl}/${id}`, classroom);
    }

    // Get all classrooms
    getAllClassrooms(): Observable<ClassroomDTO[]> {
        return this.http.get<ClassroomDTO[]>(this.apiUrl);
    }

    // Get all classrooms by instructor ID
    getAllClassroomsByInstructorId(instructorId: number): Observable<ClassroomDTO[]> {
        return this.http.get<ClassroomDTO[]>(`${this.apiUrl}/Instructor/${instructorId}`);
    }

    // Get classroom by ID
    getClassroomById(id: number): Observable<ClassroomDTO> {
        return this.http.get<ClassroomDTO>(`${this.apiUrl}/${id}`);
    }

    // Delete a classroom by ID
    deleteClassroom(id: number): Observable<string> {
        return this.http.delete<string>(`${this.apiUrl}/${id}`);
    }
}
