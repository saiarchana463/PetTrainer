package com.example.ModelLayer;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name ="ReportTable")
public class ReportModel {
	
	@Id
	@GeneratedValue
	private String ReportId;
	
	@OneToOne
	@JoinColumn(name = "AppointmentDetail")
	private AppointmentModel AppointmentDetail;
	
	private Date date;
	
	private String days;
	
	private String report;
	
	@OneToOne
	@JoinColumn(name = "issuedby")
	private UserModel issuedby;

	public String getReportId() {
		return ReportId;
	}

	public void setReportId(String reportId) {
		ReportId = reportId;
	}

	public AppointmentModel getAppointmentDetail() {
		return AppointmentDetail;
	}

	public void setAppointmentDetail(AppointmentModel appointmentDetail) {
		AppointmentDetail = appointmentDetail;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	public String getReport() {
		return report;
	}

	public void setReport(String report) {
		this.report = report;
	}

	public UserModel getIssuedby() {
		return issuedby;
	}

	public void setIssuedby(UserModel issuedby) {
		this.issuedby = issuedby;
	}

	@Override
	public String toString() {
		return "ReportModel [ReportId=" + ReportId + ", AppointmentDetail=" + AppointmentDetail + ", date=" + date
				+ ", days=" + days + ", report=" + report + ", issuedby=" + issuedby + "]";
	}
}
