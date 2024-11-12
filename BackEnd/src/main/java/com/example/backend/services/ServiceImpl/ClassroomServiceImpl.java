package com.example.backend.services.ServiceImpl;

import com.example.backend.dtos.ClassroomDTO;
import com.example.backend.entites.Classroom;
import com.example.backend.entites.Instructor;
import com.example.backend.mappers.ClassroomMapper;
import com.example.backend.repositoris.ClassroomRepository;
import com.example.backend.repositoris.InstructorRepository;
import com.example.backend.services.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ClassroomServiceImpl implements ClassroomService {

    private final ClassroomRepository classroomRepository;
    private final InstructorRepository instructorRepository;
    private final ClassroomMapper classroomMapper;

    @Override
    public void saveClassroom(ClassroomDTO classroomDTO, Long instructorId) {
        Optional<Instructor> instructorOptional = instructorRepository.findById(instructorId);
        if (instructorOptional.isPresent()) {
            Classroom classroom = classroomMapper.convertToClassroom(classroomDTO);
            classroom.setInstructorCL(instructorOptional.get());
            classroomRepository.save(classroom);
        } else {
            throw new IllegalArgumentException("Instructor not found with ID: " + instructorId);
        }
    }

    @Override
    public List<ClassroomDTO> getAllClassrooms() {
        return classroomRepository.findAll()
                .stream()
                .map(classroomMapper::convertToClassroomDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ClassroomDTO getClassroomById(Long classroomId) {
        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new IllegalArgumentException("Classroom not found with ID: " + classroomId));
        return classroomMapper.convertToClassroomDTO(classroom);
    }

    @Override
    public void deleteClassroom(Long classroomId) {
        if (classroomRepository.existsById(classroomId)) {
            classroomRepository.deleteById(classroomId);
        } else {
            throw new IllegalArgumentException("Classroom not found with ID: " + classroomId);
        }
    }
}
