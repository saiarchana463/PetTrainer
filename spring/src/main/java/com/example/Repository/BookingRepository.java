package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.ModelLayer.BookingModel;


@Repository
public interface BookingRepository extends JpaRepository<BookingModel, String> {

    void findByBookingStatus(BookingModel data);

    
}