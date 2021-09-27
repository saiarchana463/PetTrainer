package com.example.Dto;

import com.example.ModelLayer.BookingModel;

public class TrainerToBooking {
    private BookingModel booking;

    public TrainerToBooking() {

    }

    public BookingModel getBooking() {
        return booking;
    }

    public void setBooking(BookingModel booking) {
        this.booking = booking;
    }

    @Override
    public String toString() {
        return "UserToBooking [booking=" +booking+ "]";
    }

    public TrainerToBooking(BookingModel booking) {
        super();
        this.booking= booking;
    }

}