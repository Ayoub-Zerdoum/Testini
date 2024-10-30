package com.example.backend.DTO;

import java.util.List;

public record SessionDTO(Long id, String titre, List<SubmessionDTO> submissions) {}
