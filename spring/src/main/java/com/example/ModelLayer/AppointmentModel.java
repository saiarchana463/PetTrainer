package com.example.ModelLayer;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class AppointmentModel {
    @Id
    private String AppointmentId;

    @ManyToOne
    private UserModel userId;

    @Temporal(TemporalType.DATE)
    private Date date;

    @ManyToOne
    private UserModel issuedBy;

    public AppointmentModel() {
         
    }

    public AppointmentModel(String AppointmentId, UserModel userId, Date date, String Description, UserModel issuedBy) {
		super();
		this.AppointmentId = AppointmentId;
		this.userId = userId;
		this.date = date;
		this.issuedBy = issuedBy;
	}

    public String getAppointmentId() {
		return AppointmentId;
	}

	public void setAppointmentId(String AppointmentId) {
		this.AppointmentId = AppointmentId;
	}
    public UserModel getUserId() {
		return userId;
	}

	public void setUserId(UserModel userId) {
		this.userId = userId;
	}
    public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
    public UserModel getIssuedBy() {
		return issuedBy;
	}

	public void setIssuedBy(UserModel issuedBy) {
		this.issuedBy = issuedBy;
	}
    
}