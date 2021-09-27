package com.example.Dto;

import com.example.ModelLayer.BookingModel;

public class UserToBooking {
    private BookingModel booking;

    public UserToBooking() {

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

    public UserToBooking(BookingModel booking) {
        super();
        this.booking= booking;
    }
 }