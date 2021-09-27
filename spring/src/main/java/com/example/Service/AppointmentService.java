package com.example.Service;

import java.util.List;
import java.util.Optional;

import com.example.ModelLayer.AppointmentModel;
import com.example.Repository.AppointmentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepo repo;

    public List<AppointmentModel> getAllAppointments() {
        return (List<AppointmentModel>) repo.findAll();
    }

    public Optional<AppointmentModel> getAppointmentById(String id) {
        return null;
    }

    public AppointmentModel addAppointment(AppointmentModel data) {
        return null;
    }

    public AppointmentModel updateAppointment(AppointmentModel data) {
        return null;
    }

    public void deleteAppointmentById(String id) {
    }
    
}
