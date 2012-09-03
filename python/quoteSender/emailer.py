import smtplib
import random

#get credentials from text file
credentials = open('C:\\Users\\nathan.boyd\\creds.txt');
un = credentials.readline();
pw = credentials.readline();

username    = un;
fromaddr    = un;
toaddrs     = un;
password    = pw;

#get a quote to send
lines = open('A:\\documents\\nathan\\My Documents\\Dropbox\\quotes.txt').read().splitlines();
msg = random.choice(lines)

#mail send
server = smtplib.SMTP('smtp.gmail.com:587')
server.starttls()
server.login(username, password)
server.sendmail(fromaddr, toaddrs, msg)
server.quit()