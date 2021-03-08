package com.example.Mod3hwk3.controller;


import com.example.Mod3hwk3.model.Movie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class MovieController {

    @GetMapping("/movies")
    public Movie[] getAllMovies(){

        String url = "https://my.api.mockaroo.com/movie.json?key=bb299fd0";

        RestTemplate restTemplate = new RestTemplate();

        Movie[] response = null;

        response = restTemplate.getForObject(url, Movie[].class);

        System.out.println(response[0]);

        return response;
    }

}
