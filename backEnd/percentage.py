import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="",database='myBuddyDb')

dbcursor = mydb.cursor()
cursorex = dbcursor.execute("SELECT * FROM STUDENTS;")

row = dbcursor.fetchone()

while row is not None:
    print(row)
    row = dbcursor.fetchone()

	

try:
	with mydb.cursor() as cursor:
		cursor.execute("SELECT * FROM STUDENTS;")
finally:
	connection.close()
