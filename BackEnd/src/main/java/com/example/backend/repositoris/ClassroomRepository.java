package com.example.backend.repositoris;

import com.example.backend.entites.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    List<Classroom> findByTitle(String title);
}
