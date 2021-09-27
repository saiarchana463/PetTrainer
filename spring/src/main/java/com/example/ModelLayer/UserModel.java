package com.example.ModelLayer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
@Table
public class UserModel {
	@Id
	@GeneratedValue
	private Integer id;
	@NotNull(message = "Email is mandatory")
	@Email(message = "invalid email")
	private String email;
	@NotNull(message = "username is mandatory")
    private String username;
	@NotNull(message = "Type your password")
	@Length(min = 5, max = 20, message = "Password should be atleast 5 characters")
    private String password;
	@NotNull(message = "Mobile number is mandatory")
	@Length(min=10, message = "mobile number should be 10 digits")
    private String mobileNumber;
    private Boolean active;
    private String role;

	public UserModel() {

	}

	public UserModel(Integer id, String email, String username, String password, String mobileNumber, Boolean active,
			String role) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.active = active;
		this.role = role;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserModel [active=" + active + ", email=" + email + ", id=" + id + ", mobileNumber=" + mobileNumber
				+ ", password=" + password + ", role=" + role + ", username=" + username + "]";
	}

}