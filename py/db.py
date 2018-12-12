#!/usr/bin/python
import mysql.connector

config = {
  'user': 'username',
  'password': 'password',
  'host': 'localhost',
  'database': 'db_name',
  'raise_on_warnings': True
}

cnx = mysql.connector.connect(**config)
query = "SHOW TABLES;"
cursor = cnx.cursor()
cursor.execute(query)

for (table_name,) in cursor:
  print(table_name)

cnx.close()
