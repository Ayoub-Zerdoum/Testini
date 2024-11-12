package com.example.backend.web;

import com.example.backend.dtos.ClassroomDTO;
import com.example.backend.services.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classrooms")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClassroomController {

    private final ClassroomService classroomService;

    // 1. Save Classroom
    @PostMapping
    public ResponseEntity<String> saveClassroom(@RequestBody ClassroomDTO classroomDTO, @RequestParam Long instructorId) {
        try {
            classroomService.saveClassroom(classroomDTO, instructorId);
            return ResponseEntity.status(HttpStatus.CREATED).body("Classroom saved successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // 2. Get All Classrooms
    @GetMapping
    public ResponseEntity<List<ClassroomDTO>> getAllClassrooms() {
        List<ClassroomDTO> classroomDTOs = classroomService.getAllClassrooms();
        return ResponseEntity.ok(classroomDTOs);
    }

    // 3. Get Classroom by ID
    @GetMapping("/{id}")
    public ResponseEntity<ClassroomDTO> getClassroomById(@PathVariable Long id) {
        try {
            ClassroomDTO classroomDTO = classroomService.getClassroomById(id);
            return ResponseEntity.ok(classroomDTO);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // 4. Delete Classroom by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClassroom(@PathVariable Long id) {
        try {
            classroomService.deleteClassroom(id);
            return ResponseEntity.ok("Classroom deleted successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}