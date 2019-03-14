INSERT INTO STUDENTS (StudentID, Student_Forename, Student_Surname, KCL_Email, Issues, Verified) VALUES
	("0","Diogo","Ramos","diogo.ramos@kcl.ac.uk","",1),
	("1","Ronnie","Kiyegga","ronnie.kiyegga@kcl.ac.uk","",1);

INSERT INTO MENTORS (MentorID, Mentor_Forename, Mentor_Surname, KCL_Email, Skills) VALUES
	("0","Kirryl","Tarunin","kirryl.tarunin@kcl.ac.uk",""),
	("1","Kevin","Vasquez","kevin.vasquez@kcl.ac.uk","");
	
INSERT INTO INTERESTS (InterestTitle) VALUES
	("Athletics"),
	("Chess"),
	("Boxing"),
	("Martial arts"),
	("Ice Hockey"),
	("Rock climbing"),
	("Ice skating"),
	("Hockey"),
	("Football"),
	("Rugby");			
	
INSERT INTO STUDENT_INTERESTS (StudentID, InterestTitle) VALUES
	("0","Ice skating"),
	("0","Football"),
	("1","Boxing"),
	("1","Athletics");

INSERT INTO MENTOR_INTERESTS (MentorID, InterestTitle) VALUES
	("0","Chess"),
	("0","Boxing"),
	("1","Martial arts"),
	("1","Ice skating");
	
/* INSERT INTO MENTOR_STUDENT_PAIR () VALUES
	(),
	(); */	
	

INSERT INTO SIMILAR_INTERESTS (firstInterest, secondInterest) VALUES
	("Boxing","Martial arts"),
	("Ice Hockey","Ice skating"),
	("Ice Hockey","Hockey"),
	("Football","Rugby"),
	("Rugby","Boxing");	

