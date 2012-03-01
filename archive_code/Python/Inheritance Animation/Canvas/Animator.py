from Tkinter import *
import tkFileDialog
import time

class Animator(Tk):
  def __init__(self, fileName): #two inits to call the parent class
    Tk.__init__(self)

    self.title("ASCII Animator")
    self.configure(bg="white")
    self.aASCII = [] 
    self.fileName = fileName
    self.ImportFile()

  def getASCII(self):
    return self.aASCII

  def ImportFile(self):    
    self.ASCII_Height = 30
    self.ASCII_Width = 75

    with open(self.fileName) as f:
      line = 0
      for row in f:
        self.aASCII.append(row.rstrip())
    
  def Animate(self):

    self.textArea = Text(self, height=self.ASCII_Height, width=self.ASCII_Width)

    for index in range(len(self.aASCII)):
      temp = self.aASCII[index].replace("&","")
      self.textArea.insert(INSERT, temp)
      self.textArea.insert(INSERT, "\n")

      if self.aASCII[index].count("&") != 0:
        self.textArea.grid()
        self.update()
        time.sleep(.25)
        self.textArea.delete(1.0,END)       

def main():
  print "Animator main called\n"
  animator = Animator("ASCII ART/FishTank.ascii")
  animator.Animate()
  animator.destroy()

  
if __name__ == "__main__":
  main()
