package com.example.ModelLayer;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class BookingModel {
    @Id
	@GeneratedValue
    private String bookingId;
    @ManyToOne
    private UserModel clientDetail;

    @ManyToOne
    private TrainerModel TrainerDetail;

    private String lawfirmName;

    @Temporal(TemporalType.DATE)
    private Date date;

    private Boolean bookingStatus;

	public String getBookingId() {
		return bookingId;
	}

	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}

	public UserModel getClientDetail() {
		return clientDetail;
	}

	public void setClientDetail(UserModel clientDetail) {
		this.clientDetail = clientDetail;
	}

	public TrainerModel getBeauticianDetail() {
		return TrainerDetail;
	}

	public void setBeauticianDetail(TrainerModel beauticianDetail) {
		TrainerDetail = beauticianDetail;
	}

	public String getLawfirmName() {
		return lawfirmName;
	}

	public void setLawfirmName(String lawfirmName) {
		this.lawfirmName = lawfirmName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}


	public Boolean getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(Boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

   
}