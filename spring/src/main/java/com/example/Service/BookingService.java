package com.example.Service;

import java.util.List;
import java.util.Optional;

import com.example.ModelLayer.BookingModel;
import com.example.Repository.BookingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    
    @Autowired
    private BookingRepository repo;
    
    public BookingModel addBooking(BookingModel bookingModel) {
        return repo.save(bookingModel);
    }

    public List<BookingModel> getAllBookings() {
        return (List<BookingModel>) repo.findAll();
    }


    public Optional<BookingModel> getBookingById(String id) {
        return repo.findById(id);
    } 

    public void deleteBookingById(String id) {
        repo.deleteById(id);
    }

    public void statusModifier(BookingModel data) {
        repo.findByBookingStatus(data);
    }

    public BookingService(BookingRepository repo) {
        this.repo = repo;
    }
    
}
