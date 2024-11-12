package com.example.backend.entites;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity
@Builder
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Classroom implements Serializable{
    @Serial
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String titleColor;
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @ElementCollection
    private List<Float> coefs;

    @ManyToOne
    private Instructor instructorCL;
    @OneToMany(mappedBy = "classroomSH")
    private List<Session> Session;
    @OneToMany(mappedBy = "classroomMerge")
    private List<Merge> mergingDetails;


}
