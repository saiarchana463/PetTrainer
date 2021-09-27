package com.example.ModelLayer;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TrainerDetails")
public class TrainerModel{
 
 @Id
 @Column(name="Trainer_id")
 private int id;
 
 @Column(name = "Trainer_name")
 private String name;

 @Column(name="Trainer_experience")
 private String Expereince;
 
 @Column(name="Organisation")
 private String Organisation;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getExpereince() {
	return Expereince;
}

public void setExpereince(String expereince) {
	Expereince = expereince;
}

public String getOrganisation() {
	return Organisation;
}

public void setOrganisation(String organisation) {
	Organisation = organisation;
}
}