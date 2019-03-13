CREATE DATABASE myBuddyDb;
USE myBuddyDb;

CREATE TABLE STUDENTS (
	StudentID CHAR(10) UNIQUE NOT NULL,
	Student_Forename VARCHAR(20),
	Student_Surname VARCHAR(20),
	KCL_Email VARCHAR(30) NOT NULL,
	Issues VARCHAR(30),
	Verified TINYINT(1),
	PRIMARY KEY(StudentID)
);

CREATE TABLE MENTORS (
	MentorID CHAR(10) UNIQUE NOT NULL,
	Mentor_Forename VARCHAR(20),
	Mentor_Surname VARCHAR(20),
	KCL_Email VARCHAR(30) NOT NULL,
	Skills VARCHAR(30),
	PRIMARY KEY(MentorID)
);

CREATE TABLE STUDENT_INTERESTS (
	StudentID CHAR(10) NOT NULL,
	InterestTitle CHAR(10) NOT NULL,
	
	FOREIGN KEY (StudentID) REFERENCES STUDENTS(StudentID)
	ON UPDATE CASCADE ON DELETE RESTRICT,
	
	FOREIGN KEY (InterestTitle) REFERENCES INTERESTS(InterestTitle)
	ON UPDATE CASCADE ON DELETE RESTRICT,
);

CREATE TABLE MENTOR_INTERESTS (
	MentorID CHAR(10) NOT NULL,
	InterestTitle CHAR(10) NOT NULL,
	
	FOREIGN KEY (MentorID) REFERENCES MENTORS(MentorID)
	ON UPDATE CASCADE ON DELETE RESTRICT,
	
	FOREIGN KEY (InterestTitle) REFERENCES INTERESTS(InterestTitle)
	ON UPDATE CASCADE ON DELETE RESTRICT,
);

CREATE TABLE MENTOR_STUDENT_PAIR (
	MentorID CHAR(10) UNIQUE NOT NULL,
	StudentID CHAR(10) UNIQUE NOT NULL,
	Compatibility VARCHAR(30),
	
	FOREIGN KEY (MentorID) REFERENCES MENTORS(MentorID)
	ON UPDATE CASCADE ON DELETE RESTRICT,
	
	FOREIGN KEY (StudentID) REFERENCES STUDENTS(StudentID)
	ON UPDATE CASCADE ON DELETE RESTRICT
);


CREATE TABLE ADMINS (
	AdminID CHAR(10) UNIQUE NOT NULL,
	KCL_Email CHAR(30) NOT NULL,
	PRIMARY KEY(AdminID)
);

CREATE TABLE SUPER_ADMINS (
	AdminID CHAR(10) UNIQUE NOT NULL,
	
	FOREIGN KEY (AdminID) REFERENCES ADMINS(AdminID)
	ON UPDATE CASCADE ON DELETE RESTRICT	
);

CREATE TABLE INTERESTS (
	InterestTitle CHAR(10) UNIQUE NOT NULL,
	
	PRIMARY KEY(InterestsTitle)
);

CREATE TABLE SIMILAR_INTERESTS (
	firstInterest CHAR(10) NOT NULL,
	secondInterest CHAR(10) NOT NULL,
	
	FOREIGN KEY (firstInterest) REFERENCES INTERESTS(InterestTitle)
	ON UPDATE CASCADE ON DELETE RESTRICT,
	
	FOREIGN KEY (secondInterest) REFERENCES INTERESTS(InterestTitle)
	ON UPDATE CASCADE ON DELETE RESTRICT
);

