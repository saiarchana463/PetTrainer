package com.example.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ModelLayer.TrainerModel;


@Repository
public interface HomeRepo extends CrudRepository<TrainerModel, Integer> {
    //Repository for home page with trainer details such as
    //Name,experience, Shop or organisation name
}