package com.example.Dto;

import com.example.ModelLayer.AppointmentModel;

public class UserToAppointment {
    private AppointmentModel appointment;

    public UserToAppointment() {

    }

    public AppointmentModel getAppointment() {
        return appointment;
    }

    public void setAppointment(AppointmentModel appointment) {
        this.appointment = appointment;
    }

    @Override
    public String toString() {
        return "UserToAppointment [appointment=" +appointment+ "]";
    }

    public UserToAppointment(AppointmentModel appointment) {
        super();
        this.appointment= appointment;
    }
 }