package com.example.Repository;

import com.example.ModelLayer.AppointmentModel;
import com.example.ModelLayer.BookingModel;

import org.springframework.data.repository.CrudRepository;

public interface AppointmentRepo extends CrudRepository<AppointmentModel, Integer> {

    void save(BookingModel booking);
    
}
