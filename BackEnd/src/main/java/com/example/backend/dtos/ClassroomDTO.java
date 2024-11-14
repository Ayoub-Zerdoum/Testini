package com.example.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClassroomDTO {
    /*[
            "#FF6F61",
            "#20B2AA",
            "#9370DB",
            "#FF8C00",
            "#32CD32",
            "#1E90FF",
            "#FF4500"
            ]
           */


    private Long id;
    private String title;
    private String titleColor;
    private Date creationDate;
    private Integer studentCount;
    private Integer assignmentCount;
    private Date nextTestDate;
    private String testTitle;





   


}
