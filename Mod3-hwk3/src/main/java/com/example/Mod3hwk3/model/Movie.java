package com.example.Mod3hwk3.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;


@JsonIgnoreProperties
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Movie {

    private int movie_id;
    private String title;
    private String director;
    private int year;
    private String genre;

}
