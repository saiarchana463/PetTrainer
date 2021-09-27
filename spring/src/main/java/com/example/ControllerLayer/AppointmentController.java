package com.example.ControllerLayer;

import java.util.List;
import java.util.Optional;

import com.example.ModelLayer.AppointmentModel;
import com.example.Service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppointmentController {
    
    @Autowired
    private AppointmentService service;

    @GetMapping("/appointments")
    public List<AppointmentModel> viewAppointments() {
        return (List<AppointmentModel>) service.getAllAppointments();
    }

    @GetMapping("/Appointment/{id}")
    public Optional<AppointmentModel> viewAppointmentbyId(@PathVariable String id) {
        return service.getAppointmentById(id);
    }
    @PostMapping("/addappointment")
    public AppointmentModel addAppointment(@RequestBody AppointmentModel data) {
        return service.addAppointment(data);
    }

    @PutMapping("/update/appointment")
    public AppointmentModel updateAppointment(@RequestBody AppointmentModel data) {
        return service.updateAppointment(data);
    }

    @DeleteMapping("/delete/appointment/{id}")
    public void deleteAppointment(@PathVariable String id) {
        service.deleteAppointmentById(id);
    }
}