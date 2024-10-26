package com.example.backend.services;

import com.example.backend.entites.Classroom;

import java.util.List;

public interface ClassroomService {
    void saveClassroom(Classroom classroom, Long instructorId);
    List<Classroom> getAllClassrooms();
    Classroom getClassroomById(Long classroomId);
    void deleteClassroom(Long classroomId);
}
