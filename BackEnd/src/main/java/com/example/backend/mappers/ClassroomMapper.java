package com.example.backend.mappers;


import com.example.backend.dtos.ClassroomDTO;
import com.example.backend.dtos.MergeDTO;
import com.example.backend.entites.Classroom;
import com.example.backend.entites.Merge;
import org.springframework.stereotype.Component;

@Component
public class ClassroomMapper {
    public Classroom convertToClassroom(ClassroomDTO classroomDTO) {
        Classroom classroom = new Classroom();
        classroom.setId(classroomDTO.getId());
        classroom.setTitleColor(classroomDTO.getTitleColor());
        classroom.setTitle(classroomDTO.getTitle());
        return classroom;

    }
    public ClassroomDTO convertToClassroomDTO(Classroom classroom) {
        ClassroomDTO classroomDTO = new ClassroomDTO();
        classroomDTO.setId(classroom.getId());
        classroomDTO.setTitleColor(classroom.getTitleColor());
        classroomDTO.setTitle(classroom.getTitle());
        return classroomDTO;
    }


}
