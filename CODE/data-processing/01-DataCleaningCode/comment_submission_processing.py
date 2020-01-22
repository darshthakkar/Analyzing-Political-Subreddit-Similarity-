import csv
import sys
import glob
import os

def ReadWrite(file):
	try:
		file_object = open(file, 'r')
		lines = csv.reader(file_object, delimiter=',', quotechar='"')
		flag = 0
		data=[]
		for line in lines:
			if line == []:
				flag =1
				continue
			else:
				data.append(line)
		file_object.close()
		if flag ==1: #if blank line is present in file
			file_object = open(file, 'w')
			for line in data:
				str1 = ','.join(line)
				file_object.write(str1+"\n")
			file_object.close() 
	except Exception as e:
		print(e)

substring_list= ["government shutdown","Government Shutdown","appropriations bill","Antideficiency Act","antideficiency act","U.S.-Mexico border wall","US-Mexico Border Wall","border wall","Border Wall","Chuck Schumer","chuck schumer","back pay","national emergency"]

for filepath in ["ParsedBigQueryData/RC_2018_12/RC_2018_12_democrats.csv","ParsedBigQueryData/RC_2018_12/RC_2018_12_Republican.csv"]:
	print(filepath)

	with open(filepath, encoding="utf-8") as file:
		newpath= filepath[30:]
		concat_file_name = "../02-CleanedFiles/ShutdownWordBanks/" + newpath[:-4] + "_Demo" + ".txt"
		text_output= open(concat_file_name,"w", encoding="utf-8")
		reader= csv.reader(file)
		comment_count=0
		for row in reader:
			if "[deleted]" not in row[0] and "[removed]" not in row[0] and row[0]!="body" and any(substring in row[0] for substring in substring_list):
					written_content= row[0] +'\n'
					text_output.write(written_content)
					comment_count+=1
		text_output.close()

	with open("../02-CleanedFiles/RC_2018_12_counts.csv",'a') as csv_file:
		count_writer= csv.writer(csv_file,delimiter=",")
		subreddit_name_topic=concat_file_name[:-9]
		subreddit_name_topic=subreddit_name_topic[48:]
		count_writer.writerow([subreddit_name_topic,comment_count])
		csv_file.close()

ReadWrite("../02-CleanedFiles/RC_2018_12_counts.csv")

for filepath in ["ParsedBigQueryData/RS_2018_12/RS_2018_12_democrats.csv","ParsedBigQueryData/RS_2018_12/RS_2018_12_Republican.csv"]:
	print(filepath)

	with open(filepath, encoding="utf-8") as file:
		newpath= filepath[30:]
		concat_file_name = "../02-CleanedFiles/ShutdownWordBanks/" + newpath[:-4] + "_Demo" + ".txt"
		text_output= open(concat_file_name,"w", encoding="utf-8")
		reader= csv.reader(file)
		submission_count=0
		for row in reader:
			if "[deleted]" not in row[0] and "[removed]" not in row[0] and row[0]!="body" and any(substring in row[0] for substring in substring_list):
					written_content= row[0] + '\n'
					text_output.write(written_content)
					submission_count+=1
		text_output.close()

	with open("../02-CleanedFiles/RS_2018_12_counts.csv",'a') as csv_file:
		count_writer= csv.writer(csv_file,delimiter=",")
		subreddit_name_topic=concat_file_name[:-9]
		subreddit_name_topic=subreddit_name_topic[48:]
		count_writer.writerow([subreddit_name_topic,submission_count])
		csv_file.close()

ReadWrite("../02-CleanedFiles/RS_2018_12_counts.csv")





#combine txt
read_democrats_files = ["../02-CleanedFiles/ShutdownWordBanks/RC_2018_12_democrats_Demo.txt","../02-CleanedFiles/ShutdownWordBanks/RS_2018_12_democrats_Demo.txt"]
read_Republican_files = ["../02-CleanedFiles/ShutdownWordBanks/RC_2018_12_Republican_Demo.txt","../02-CleanedFiles/ShutdownWordBanks/RS_2018_12_Republican_Demo.txt"]

with open("../02-CleanedFiles/ShutdownWordBanks/democrats_demo.txt", "wb") as outfile_d:
	for dem in read_democrats_files:
		with open(dem, "rb") as infile_d:
			outfile_d.write(infile_d.read())
outfile_d.close()

with open("../02-CleanedFiles/ShutdownWordBanks/Republican_demo.txt", "wb") as outfile_r:
	for rep in read_Republican_files:
		with open(rep, "rb") as infile_r:
			outfile_r.write(infile_r.read())
outfile_r.close()

os.remove("../02-CleanedFiles/ShutdownWordBanks/RC_2018_12_democrats_Demo.txt")
os.remove("../02-CleanedFiles/ShutdownWordBanks/RS_2018_12_democrats_Demo.txt")
os.remove("../02-CleanedFiles/ShutdownWordBanks/RC_2018_12_Republican_Demo.txt")
os.remove("../02-CleanedFiles/ShutdownWordBanks/RS_2018_12_Republican_Demo.txt")