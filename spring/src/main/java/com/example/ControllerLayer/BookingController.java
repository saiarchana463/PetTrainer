package com.example.ControllerLayer;

import java.util.List;
import java.util.Optional;

import com.example.ModelLayer.BookingModel;
import com.example.Service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {
    
    @Autowired
    private BookingService service;

    @PostMapping("/booking")
    public BookingModel addBooking(@RequestBody BookingModel bookingModel) {
        return service.addBooking(bookingModel);
    }

    @GetMapping("/bookings")
    public List<BookingModel> getBooking() {
        return (List<BookingModel>) service.getAllBookings();
    }


    @GetMapping("/bookings/{id}")
    public Optional<BookingModel> bookingById(@PathVariable String id) {
        return service.getBookingById(id);
    }

    @DeleteMapping("/booking/{id}")
    public void removeBooking(@PathVariable String id) {
        service.deleteBookingById(id);
    }


    @GetMapping("/Trainer/booking")
    public List<BookingModel> getBookingByTrainer() {
        return (List<BookingModel>) service.getAllBookings();
    }
}
