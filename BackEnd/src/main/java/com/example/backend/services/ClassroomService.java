package com.example.backend.services;

import com.example.backend.dtos.ClassroomDTO;

import java.util.List;

public interface ClassroomService {
    void saveClassroom(ClassroomDTO classroomDTO, Long instructorId);
    List<ClassroomDTO> getAllClassrooms();
    ClassroomDTO getClassroomById(Long classroomId);
    void deleteClassroom(Long classroomId);
}
