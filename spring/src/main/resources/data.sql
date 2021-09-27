--Trainer details
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('1','Ravi','3 years','Petcare');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('2','Ravivarma','2 years','Kittens');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('4','Ramesh','3 years','LOvePets');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('5','Trupthi','1 years','HappyPets');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('3','Suresh','4 years','Petfarm');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('6','Lavanya','3 years','PetcareFarm');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('7','kiran','7 years','BlessingCare');
insert into TRAINER_DETAILS (TRAINER_ID,TRAINER_NAME,TRAINER_EXPERIENCE,ORGANISATION) values ('8','Mahesh','2 years','TreeHouseFarm');

--User details
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (1,'ravi@gmail.com','Hello@1234','Ravi Varma Bandi','9391301426',false,'user');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (2,'nityasantosh@gmail.com','Nitya@1234','Nitya Santosh','9898596989',false,'Pettrainer');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (3,'raviv7396@gmail.com','RAvi$123','Ravi Kumar','8309583132',false,'user');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (4,'ravivv@gmail.com','Ravii5&1234','Ravi Sharma','9885400032',false,'Pettrainer');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (5,'ramesh@gmail.com','Ramesh@456','Ramesh Kumar','8309583131',false,'user');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (6,'maheshbabu@gmail.com','Mahesh@1','Mahesh Babu','9885400028',false,'Pettrainer');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (7,'kirantrainer@gmail.com','Kiran@1234','Kiran kumar','8309583155',false,'user');
insert into USER_MODEL(ID,EMAIL,PASSWORD,USERNAME,MOBILE_NUMBER,ACTIVE,ROLE) values (8,'varsha.yama08@gmail.com','Varsha@12345','Varsha Yama','9885400088',false,'Pettrainer');

--Appointment details
insert into APPOINTMENT_MODEL(APPOINTMENT_ID,USER_ID_ID,DATE,ISSUED_BY_ID) values ('1',1,'2021-01-01',1);
insert into APPOINTMENT_MODEL(APPOINTMENT_ID,USER_ID_ID,DATE,ISSUED_BY_ID) values ('2',2,'2021-03-023',2);
insert into APPOINTMENT_MODEL(APPOINTMENT_ID,USER_ID_ID,DATE,ISSUED_BY_ID) values ('3',4,'2021-10-26',4);

--Booking details
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (1,true,'2020-03-12','ABD company',2,2);  
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (2,true,'2020-03-15','petcare company',3,4); 
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (3,true,'2020-05-16','PetcareFarm company',5,6); 
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (4,true,'2020-06-20','HappyPets',7,8);  
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (5,true,'2020-07-12','BlessingCare',6,2);  
insert into BOOKING_MODEL(BOOKING_ID,BOOKING_STATUS,DATE,LAWFIRM_NAME,TRAINER_DETAIL_TRAINER_ID,CLIENT_DETAIL_ID) values (6,true,'2020-07-24','TreeHouseFarm',1,3);  
