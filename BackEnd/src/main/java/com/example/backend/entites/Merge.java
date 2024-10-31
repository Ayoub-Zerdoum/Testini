package com.example.backend.entites;

import com.example.backend.enums.OperationM;
import com.example.backend.enums.Privilege;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;


@Entity
@Builder
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Merge implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String title;
    @Enumerated(EnumType.STRING)
    private OperationM operation;
    private String passworld;
    @ElementCollection
    private List<Long> iDSessions;
    @ElementCollection
    private List<Integer> coefSessions;

    @ManyToOne
    private Classroom classroomMerge;






}
