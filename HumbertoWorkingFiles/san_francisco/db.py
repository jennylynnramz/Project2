import os
import sqlite3
import pandas as pd
from pandas import DataFrame

# Make the connection and name the db
#Important: I can create a new database by changing the name within the quotes
conn = sqlite3.connect('sanfrancisco.db')
# create a cursor 
cur = conn.cursor()
#prepare the tables schema
#Create tables - real_estate
# cur.execute(''' CREATE TABLE real_estate( [generated_id] INTEGER PRIMARY KEY NOT NULL,
#     [property_type] VARCHAR,
#     [address] VARCHAR,
#  	[city] VARCHAR,
#  	[state] VARCHAR,
#  	[zip] VARCHAR,
#  	[price] INT,
#  	[beds] REAL,
#  	[baths] REAL,
#  	[neighborhood] VARCHAR,
#  	[sqfoot] REAL,
#  	[price_sqfoot] REAL,
#  	[hoa_month] REAL,
#  	[lat] REAL,
#  	[lng] REAL,
#  	[built_year] INTEGER,
# 	[coordinates] TEXT
# )''')
#Create tables - evictions
# cur.execute(''' CREATE TABLE evictions( generated_id INTEGER PRIMARY KEY NOT NULL,
#     eviction_id VARCHAR,
#     address VARCHAR,
#  	city VARCHAR,
#  	state VARCHAR,
#  	zip VARCHAR,
#  	file_date date,
#  	non_payment BOOLEAN,
#  	breach BOOLEAN,
#     nuisance BOOLEAN,
#     illegal_use BOOLEAN,
#     failure_to_sign_renewal BOOLEAN,
#     access_denial BOOLEAN,
#     unapproved_subtenant BOOLEAN,
#     owner_move_in BOOLEAN,
#     demolition BOOLEAN,
#     capital_improvement BOOLEAN,
#     substantial_rehab BOOLEAN,
#     ellis_act_withdrawal BOOLEAN,
#     condo_conversion BOOLEAN,
#     roommate_same_unit BOOLEAN,
#     other_cause BOOLEAN,
#     late_payments BOOLEAN,
#     lead_remediation BOOLEAN,
#     development BOOLEAN,	
#     good_samaritan_ends BOOLEAN,	
#     neighborhood VARCHAR,
#     lng REAL,
#     lat REAL
# )''')

#read the csv with pandas
# real_estate_url = 'datasets/real_estate.csv'
# read_real_estate = pd.read_csv(real_estate_url)
# evictions_url = 'datasets/evictions.csv'
# read_evictions = pd.read_csv(evictions_url)
# print(read_real_estate)
# read_real_estate.to_sql('real_estate', conn, if_exists='append', index = False)
# read_evictions.to_sql('evictions', conn, if_exists='append', index = False)
print
#check before continuing:
# When reading the csv:
# - Place 'r' before the path string to read any special characters, such as '\'
# - Don't forget to put the file name at the end of the path + '.csv'
# - Before running the code, make sure that the column names in the CSV files match with the column names in the tables created and in the query below
# - If needed make sure that all the columns are in a TEXT format

# cur.execute("select * from real_estate where neighborhood='Nob Hill'")
# conn.commit()
# print(cur.fetchall())

# conn.commit()
# conn.close()

