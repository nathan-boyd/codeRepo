#!/usr/bin/python
	
import tkinter												# gui library
import sys
import random
from tkinter import ttk										# more gui

class Application():
	
	def __init__(self):
		
		root = tkinter.Tk()									
		self.root = root
		self.root.title('Python Rewrites')
		mainFrame = ttk.Frame(self.root)
		mainFrame.grid(column=20, row=20)

		self.style = ttk.Style()
		self.style.configure("BW.TLabel", padding = 4, foreground="black", font = "sans-serif")

		ttk.Label(mainFrame, text='Choose a Program', style = "BW.TLabel").grid(column=1, row=0)

		ttk.Button(mainFrame, command=self.changeMaker, text='Change Maker', style = "BW.TLabel").grid(column=1, row=2)
		ttk.Button(mainFrame, command=self.BMI, text="BMI Calc", style = "BW.TLabel").grid(column=1, row=3)
		ttk.Button(mainFrame, command=self.cryptography, text='Cryptography', style = "BW.TLabel").grid(column=1, row=4)

		ttk.Button(mainFrame, command= self.quit, text='Quit', style = "BW.TLabel").grid(column=1, row=6)

		root.mainloop()
		
	def quit(self):
		sys.exit()
								
	def BMI(self):
		
		self.root.destroy()
		
		root = tkinter.Tk()
		self.root = root	
		self.root.title('Body Mass Calculator')
		
		mainFrame = ttk.Frame(self.root)
		mainFrame.grid(column=20, row=20)
		
		ttk.Label(mainFrame, text='Enter Weight in pounds', style = "BW.TLabel").grid(column=1, row=1)
		weightE = ttk.Entry(mainFrame)
		weightE.grid(column=2, row=1)
		
		self.bmiCatL = tkinter.StringVar()
		self.bmiCatL.set("Your BMI is considered:")
		ttk.Label(mainFrame, textvariable=self.bmiCatL, style = "BW.TLabel").grid(column=0, row=5)

		
		ttk.Label(mainFrame, text='Enter Height in inches', style = "BW.TLabel").grid(column=1, row=3)
		heightE = ttk.Entry(mainFrame)
		heightE.grid(column=2, row=3)
		
		self.bmiL = ttk.Label(mainFrame)
		self.bmiL["text"]="Your BMI is       "
		self.bmiL.grid(column=0, row=4)
		
		ttk.Button(mainFrame, text='Calculate', command=lambda: self.calcBMI(int(weightE.get()), int(heightE.get()))).grid(column=2, row=4)
		ttk.Button(mainFrame, text='Menu', command=lambda: Application()).grid(column=0, row=1)

		root.mainloop()
		
	def calcBMI(self, weight, height):
		
		bmi = ((weight*703)/(height*height))
		bmi = self.format(bmi)
		
		self.bmiCatS = "catagory"
		
		if float(bmi) >= 30.0:
			self.bmiCatS = "obease"
		elif float(bmi) < 30.0 and float(bmi) >= 25.0:
			self.bmiCatS = "overweight"
		elif float(bmi) < 25.0 and float(bmi) >= 18.5:
			self.bmiCatS = "normal"
		elif float(bmi) < 18.5:
			self.bmiCatS = "underweight"
			
		self.bmiCatL.set("Your BMI is considered: " + self.bmiCatS)

		self.bmiL["text"] = "Your BMI is " + str(bmi)

	def cryptography(self):
		
		self.root.destroy()
		
		keepGoing = True
		
		while keepGoing:
			print("	 ,--.									  .")
			print("	|  -' ,-. . . ,-. |- ,-. ,-. ,-. ,-. ,-. |-. . .")
			print("	|   . |   | | | | |  | | | | |   ,-| | | | | | |")
			print("	`--'  '   `-| |-' `' `-' `-| '   `-^ |-' ' ' `-|")
			print("                   /|  |          ,|         |       / |")
			print("                  `-'  '          `'         '       `-'")
			print("Select an option")
			print("0) Quit")
			print("1) Encrypt a phrase with standard key")
			print("2) Encrypt a phrase with RANDOM key")
			print("3) Decrypt a standardly encrypted phrase")
			print("4) Decrypt a randomly encrypted phrase")
	
			print("***Choice 4 only works if passphrase was encrypted")
			print("      in in current console session.***")
				
			menuChoice = int(input())
			
			if int(menuChoice) == 0:
				self.__init__()
			elif int(menuChoice) == 1:
				self.encryptStandard()
			elif int(menuChoice) == 2:
				self.encryptRandom()
			elif int(menuChoice) == 3:
				self.decryptStandard()
			elif int(menuChoice) == 4:
				self.decryptRandom()
	
	alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	key =   "UBWKOVGAPRFJLCQHZENSXDMYTI"
	
	def getPhrase(self):
		phrase = str(input())
		phrase.replace(" ", "")
		return phrase.upper()
	
	def encryptStandard(self):
		print("Please enter unencrypted phrase")
		phrase = self.getPhrase()
		newPhrase = ""
		for i in range(len(phrase)):
			originalChar = phrase[i]
			replaceIndex = self.alpha.find(originalChar)
			newPhrase += self.key[replaceIndex]
		print (newPhrase)
	
	def decryptStandard(self):
		print("Please enter standardly encrypted phrase to be unencrypted")	
		phrase = self.getPhrase()
		newPhrase = ""
		for i in range(len(phrase)):
			originalChar = phrase[i]
			replaceIndex = key.find(originalChar)
			newPhrase += alpha[replaceIndex]
		print(newPhrase)
		
	def encryptRandom(self):
		from random import shuffle
		randKey = ""
		newPhrase = ""
		print("Please enter unencrypted phrase")
		phrase = self.getPhrase()
		
		newPhrase = ""
		alphaList = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
		shuffle(alphaList)	
		for i in range(len(alphaList)):
			randKey += alphaList[i]
		
		for i in range(len(phrase)):
			originalChar = phrase[i]
			replaceIndex = phrase.find(originalChar)
			newPhrase += randKey[replaceIndex]
		print(newPhrase)
		
	def decryptRandom(self):
		print("Please enter a randomly encrypted phrase to be unencrypted")
		phrase = getPhrase()
		for i in range(len(phrase)):
			originalChar = phrase[i]
			replaceIndex = randKey.find(originalChar)
			newPhrase += alpha[replaceIndex]
		print(newPhrase)
					
	def changeMaker(self):
		
		self.root.destroy()
				
		keepGoing = True
			
		while keepGoing:
			print("                     Robert Boyds\n")
			print(" ,--. .                     ,-,-,-.       . ")
			print("| `-' |-. ,-. ,-. ,-. ,-.   `,| | |   ,-. | , ,-. ,-.")
			print("|   . | | ,-| | | | | |-'     | ; | . ,-| |<  |-' |")
			print("`--'  ' ' `-^ ' ' `-| `-'     '   `-' `-^ ' ` `-' '")
			print("                   ,|   ")
			print("                  \/")
			
			print("0) Quit")
			print("\nWhat is the price of the item?")
			itemPrice = float(input())
			if itemPrice == 0.0:
				self.__init__()
			else:
				print("\nHow much cash was tendered?")
				cashTendered = float(input())
				
			while itemPrice > cashTendered:	
					
				print("The item costs $" + str(format(itemPrice)) + " which is more than $" + str(format(cashTendered)) + " Please try again.")	
				print("\nWhat is the price of the item?")
				itemPrice = float(input())
				print("\nHow much cash was tendered?")
				cashTendered = float(input())		
							
			print("Your change is $" + str(self.makeChange(itemPrice, cashTendered)))
			print("That is equal to " + "\n" + str(self.renderChange(float(self.makeChange(itemPrice, cashTendered)))))
	
	def makeChange(self, itemPrice, cashTendered):
		change = (cashTendered - itemPrice)
		change = format(change)
		return change
	
	def format(self,value):
		value = "%.2f" % value
		return value
	
	def renderChange(self,change):
		
		change *= 100
		change = int(change)
		
		billArray = []
		billArray.append("Hundreds")
		billArray.append("Fifties")
		billArray.append("Twenties")
		billArray.append("Tens")
		billArray.append("Fives")
		billArray.append("Dollars")
		billArray.append("Quarters")
		billArray.append("Dimes")
		billArray.append("Nickels")
		billArray.append("Pennies")
		
		numArray = []
		numArray.append(10000)
		numArray.append(5000)
		numArray.append(2000)
		numArray.append(1000)
		numArray.append(500)
		numArray.append(100)
		numArray.append(25)
		numArray.append(10)
		numArray.append(5)
		numArray.append(1)
		
		billsReturned = ""
		numDeno = 1
		import math
		
		for i in range(len(numArray)):
			numDeno =  (change / numArray[i])
			numDeno = math.floor(numDeno)
	
			if numDeno >= 1:
				billsReturned += "	" + str(numDeno) + " " +(billArray[i] + "\n")
				subChange = ((numDeno) * (numArray[i]))
				change -= subChange
	
		return(billsReturned)

if __name__ == '__main__':
	Application()







