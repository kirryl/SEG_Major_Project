import mysql.connector


def connectDB():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database='myBuddyDb')



def updateStudentVerified(studentID):
	connectDB()
    cursor = mydb.cursor()
	cursor.execute("UPDATE STUDENTS SET Verified=1 WHERE StudentID="+str(studentID)+";")
	cursor.close()	
	
	
def showStudentsTable():
    connectDB()
    studentCursor = mydb.cursor()
    studentCursor.execute("SELECT Student_Forename, Student_Surname, KCL_Email, Issues, Verified FROM STUDENTS;")	
	studentIds = studentCursor.fetchone()
	studentList = []
	while studentIds is not None:
		studentList.append(studentIds[0])
		studentIds = studentCursor.fetchone()
	
	print(studentList)	
	studentCursor.close()
	

def showMentorsTable():
	connectDB()
    mentorCursor = mydb.cursor()
    mentorCursor.execute("SELECT Mentor_Forename, Mentor_Surname, KCL_Email, Skills FROM MENTORS;")	
	mentorIds = mentorCursor.fetchone()
	mentorList = []
	while mentorIds is not None:
		mentorList.append(mentorIds[0])
		mentorIds = mentorCursor.fetchone()
	
	print(mentorList)	
	mentorCursor.close()
	
def showAssignedStudents(mentorID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("SELECT STUDENTS.StudentID, STUDENTS.Student_Forename, STUDENTS.Student_Surname FROM STUDENTS NATURAL JOIN MENTOR_STUDENT_PAIR WHERE MentorID"+mentorID+";")
	cursor.close()
	
    
def showSingularStudentInformation(studentID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("SELECT Student_Forename, Student_Surname, KCL_Email, Issues, Verified FROM STUDENTS WHERE StudentID="+studentID+";")
	cursor.close()
	

def showSingularMentorInformation(mentorID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("SELECT Mentor_Forename, Mentor_Surname, KCL_Email, Skills FROM MENTORS WHERE MentorID="+mentorID+";")
	cursor.close()
	

def insertStudentMentorPair(studentID, mentorID, score):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("INSERT INTO MENTOR_STUDENT_PAIR (MentorID, StudentID, Compatibility) VALUES ("+studentID+", "+mentorID+", "+str(score)+");"
	cursor.close()
	
def deleteStudentMentorPair(studentID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("DELETE FROM MENTOR_STUDENT_PAIR WHERE StudentID="+studentID+");"
	cursor.close()

	
def insertAdmin(adminID, email):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("INSERT INTO ADMINS (AdminID, KCL_Email) VALUES ("+adminID+", "+email+");"
	cursor.close()
	

def insertSuperAdmin(adminID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("INSERT INTO SUPER_ADMINS (AdminID) VALUES ("+adminID+");"
	cursor.close()
	
def deleteStudent(studentID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("DELETE FROM STUDENTS WHERE StudentID="+studentID+");"
	cursor.close()


def deleteMentor(mentorID):
	connectDB()
	cursor = mydb.cursor()
	cursor.execute("DELETE FROM MENTORS WHERE MentorID="+mentorID+");"
	cursor.close()
	


studentCursor = mydb.cursor()
studentCursor.execute("SELECT StudentID FROM STUDENTS;")

studentIds = studentCursor.fetchone()

studentList = []
mentorList = []

while studentIds is not None:
	studentList.append(studentIds[0])
	studentIds = studentCursor.fetchone()


studentCursor.close()

mentorCursor = mydb.cursor()
mentorCursor.execute("SELECT MentorID FROM MENTORS;")

mentorIds = mentorCursor.fetchone()

while mentorIds is not None:
	mentorList.append(mentorIds[0])
	mentorIds = mentorCursor.fetchone()
	

mentorCursor.close()

i = 0
interestsCount =[]
#studentMentorPercentile = [[],[]]


studentMentorPercentile = []
for k in range(len(studentList)):
    studentMentorPercentile.append([0] * len(mentorList))
	

while i < len(studentList):
	j = 0
	mentorPercentile = []
	while j < len(mentorList):
		interestsName = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT InterestTitle FROM STUDENT_INTERESTS NATURAL JOIN MENTOR_INTERESTS WHERE StudentID="+str(i)+" AND MentorID="+str(j)+" AND STUDENT_INTERESTS.InterestTitle = MENTOR_INTERESTS.InterestTitle")		
		interestsName.append(interestsCursor.fetchall())
		matchingInterests = len(interestsName[0])
		#interestsCount.append(len(interestsCursor.fetchall()))
		interestsCursor.close()
		print(interestsName)
		print("matching interests"+str(matchingInterests))
		interestsNameTwo = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT a.firstInterest from(SELECT StudentID, SIMILAR_INTERESTS.firstInterest FROM STUDENT_INTERESTS JOIN SIMILAR_INTERESTS WHERE StudentID="+str(i)+" AND (STUDENT_INTERESTS.interestTitle=SIMILAR_INTERESTS.secondInterest)) as a JOIN MENTOR_INTERESTS WHERE MentorID="+str(j)+" AND (a.firstInterest=MENTOR_INTERESTS.interestTitle)")		
		interestsNameTwo.append(interestsCursor.fetchall())
		interestsCursor.close()
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT a.secondInterest from (SELECT StudentID, SIMILAR_INTERESTS.secondInterest FROM STUDENT_INTERESTS JOIN SIMILAR_INTERESTS WHERE StudentID="+str(i)+" AND (STUDENT_INTERESTS.interestTitle=SIMILAR_INTERESTS.firstInterest)) as a JOIN MENTOR_INTERESTS WHERE MentorID="+str(j)+" AND (a.secondInterest=MENTOR_INTERESTS.interestTitle)")		
		interestsNameTwo.append(interestsCursor.fetchall())
		interestsCursor.close()
		similarInterests = len(interestsNameTwo[0])
		print("similarInterests"+str(similarInterests))
		
		interestsNameTotal = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT InterestTitle FROM STUDENT_INTERESTS WHERE StudentID="+str(i)+"")		
		interestsNameTotal.append(interestsCursor.fetchall())
		totalInterests = len(interestsNameTotal[0])
		interestsCursor.close()	
		print("totalInterests"+str(totalInterests))
		
		#mentorPercentile.append(100*(matchingInterests+0.5*similarInterests)/totalInterests)		
		studentMentorPercentile[i][j] = 100*(matchingInterests+0.5*similarInterests)/totalInterests		
		j = j + 1
	#studentMentorPercentile[i].append(mentorPercentile)	
	i = i + 1

	
for k in range(len(studentList)):
	print(studentMentorPercentile[k])

