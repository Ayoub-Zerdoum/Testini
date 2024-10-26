package com.example.backend.services.ServiceImpl;

import com.example.backend.entites.Classroom;
import com.example.backend.entites.Instructor;
import com.example.backend.repositoris.ClassroomRepository;
import com.example.backend.repositoris.InstructorRepository;
import com.example.backend.services.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ClassroomServiceImpl implements ClassroomService {
    private final ClassroomRepository classroomRepository;
    private final InstructorRepository instructorRepository;

    @Override
    public void saveClassroom(Classroom classroom, Long instructorId) {
        Optional<Instructor> instructorOptional = instructorRepository.findById(instructorId);
        if (instructorOptional.isPresent()) {
            classroom.setInstructorCL(instructorOptional.get());
            classroomRepository.save(classroom);
        } else {
            throw new IllegalArgumentException("Instructor not found with ID: " + instructorId);
        }
    }

    @Override
    public List<Classroom> getAllClassrooms() {
        return classroomRepository.findAll();
    }

    @Override
    public Classroom getClassroomById(Long classroomId) {
        return classroomRepository.findById(classroomId)
                .orElseThrow(() -> new IllegalArgumentException("Classroom not found with ID: " + classroomId));
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
