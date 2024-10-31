package com.example.backend.dtos;

import com.example.backend.enums.OperationM;

import java.util.List;

public record MergeDTO(Long id, String title, OperationM operation, List<Long> iDSessions,List<Integer> coefSessions) {}
