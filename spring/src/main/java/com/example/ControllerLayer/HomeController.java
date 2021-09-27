package com.example.ControllerLayer;

import java.util.List;

import com.example.ModelLayer.TrainerModel;
import com.example.Repository.HomeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @Autowired
    private HomeRepo homeRepository;


    @GetMapping("/home")
    public List<TrainerModel> getTrainers() {
        return (List<TrainerModel>) homeRepository.findAll();
    }
}
