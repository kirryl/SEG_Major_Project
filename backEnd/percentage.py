import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="",database='myBuddyDb')

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
studentMentorPercentile = [][]

while i < len(studentList):
	j = 0
	
	while j < len(mentorList):
		interestsName = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT InterestTitle FROM STUDENT_INTERESTS NATURAL JOIN MENTOR_INTERESTS WHERE StudentID="+str(i)+" AND MentorID="+str(j)+" AND STUDENT_INTERESTS.InterestTitle = MENTOR_INTERESTS.InterestTitle")		
		interestsName.append(interestsCursor.fetchall())
		matchingInterests = len(interestsCursor.fetchall())
		#interestsCount.append(len(interestsCursor.fetchall()))
		interestsCursor.close()
		
		interestsName = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT a.firstInterest from(SELECT studentID, SIMILAR_INTERESTS.firstInterest FROM STUDENT_INTERESTS JOIN SIMILAR_INTERESTS WHERE studentID="+str(i)+" AND (STUDENT_INTERESTS.interestTitle=SIMILAR_INTERESTS.secondInterest)) as a JOIN MENTOR_INTERESTS WHERE mentorID="+str(j)+" AND (a.firstInterest=MENTOR_INTERESTS.interestTitle)")		
		interestsName.append(interestsCursor.fetchall())
		interestsCursor.close()
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT a.secondInterest from (SELECT studentID, SIMILAR_INTERESTS.secondInterest FROM STUDENT_INTERESTS JOIN SIMILAR_INTERESTS WHERE studentID="+str(i)+" AND (STUDENT_INTERESTS.interestTitle=SIMILAR_INTERESTS.firstInterest)) as a JOIN MENTOR_INTERESTS WHERE mentorID="+str(j)+" AND (a.secondInterest=MENTOR_INTERESTS.interestTitle)")		
		interestsName.append(interestsCursor.fetchall())
		interestsCursor.close()
		similarInterests = len(interestsCursor.fetchall())
		
		interestsName = []
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT studentID from STUDENT_INTERESTS WHERE studentID="+str(i))		
		interestsName.append(interestsCursor.fetchall())
		totalInterests = len(interestsCursor.fetchall())
		interestsCursor.close()
		
		studentMentorPercentile[i][j] = 100*(matchingInterests+0.5*similarInterests)/totalInterests
		
		j = j + 1
	
	i = i + 1


print(interestsName)



initialStudentCursor = mydb.cursor()
initialMentorCursor = mydb.cursor()
cursorStudent = initialStudentCursor.execute("SELECT * FROM STUDENTS;")
cursorMentor = initialMentorCursor.execute("SELECT * FROM MENTORS;")


row = initialStudentCursor.fetchone()
col = initialMentorCursor.fetchone()


while row is not None:
    print(row)
    row = initialStudentCursor.fetchone()
	while col is not None:
		print(col)
		col = initialMentorCursor.fetchone()

	
try:
	with mydb.cursor() as cursor:
		cursor.execute("SELECT * FROM STUDENTS;")
finally:
	connection.close()

	
	
#interestsCursor.execute("SELECT STUDENT_INTERESTS.InterestTitle FROM STUDENT_INTERESTS INNER JOIN MENTOR_INTERESTS ON StudentID="+str(i)+" AND MentorID="+str(j)+" AND STUDENT_INTERESTS.InterestTitle = MENTOR_INTERESTS.InterestTitle")