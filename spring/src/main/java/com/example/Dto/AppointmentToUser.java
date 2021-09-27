package com.example.Dto;

import com.example.ModelLayer.UserModel;

public class AppointmentToUser {
    private UserModel user;

    public AppointmentToUser() {

    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "AppointmentToUser [user=" +user+ "]";
    }

    public AppointmentToUser(UserModel user) {
        super();
        this.user= user;
    }
 }
