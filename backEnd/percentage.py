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

while i < len(studentList):
	j = 0
	while j < len(mentorList):
		interestsCursor = mydb.cursor()
		interestsCursor.execute("SELECT InterestTitle FROM STUDENT_INTERESTS NATURAL JOIN MENTOR_INTERESTS WHERE StudentID="+str(i)+" AND MentorID="+str(j)+" AND STUDENT_INTERESTS.InterestTitle = MENTOR_INTERESTS.InterestTitle")
		print(interestsCursor.fetchall())
		interestsCursor.close()
		j = j + 1
	i = i + 1





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
