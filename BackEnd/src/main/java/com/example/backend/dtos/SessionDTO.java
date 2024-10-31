package com.example.backend.dtos;

import java.util.List;

public record SessionDTO(Long id, String title, List<Result> results) {}
