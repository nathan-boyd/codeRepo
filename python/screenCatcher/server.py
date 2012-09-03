#!/usr/bin/python                               # This is server.py file

import socket                                   # Import socket module
import time

s = socket.socket()                             # Create a socket object
host = socket.gethostname()                     # Get local machine name
port = 12345                                    # Reserve a port for your service.
s.bind((host, port))                            # Bind to the port
s.listen(60)                                    # Now wait for client connection.

while True:
    c, addr = s.accept()                        # Establish connection with client.
    print 'Got connection from', addr
    c.send('Thank you for connecting')
    
    time.sleep(2)
    c.send('firefox')
    
    time.sleep(2)
    c.send('calc')
    
    time.sleep(2)
    
    c.close()                                   # Close the connection