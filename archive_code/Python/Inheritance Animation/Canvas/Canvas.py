from Tkinter import *
import Tkinter

from Panel import*
from Canvas import *
from Animator import *

import tkFileDialog

class Canvas(Tk):
  def __init__(self):                                     #constructor
    Tk.__init__(self)                                     #calling parent constructor


    self.currentFrame = 0
    self.totalFrame = 0
    self.fileName = ""                                    #file to be imported
    self.saveFile = "lastSavedAscii.ascii"                #save location of edited ASCII
    self.ASCII_Panels = []

    self.configure(bg="white")  
    self.title("ASCII Canvas")

    mainFrame = Frame(self, bg="white")                   #Frame to hold buttons and admin 
    designFrame = Frame(self, bg="white")                 #Frame to design the ASCII

    self.quitButton = Button(mainFrame, text="QUIT", fg="red", command=self.quit).grid(row=0,column=1)
    self.importButton = Button(mainFrame, text="Import ASCII", fg="blue", command=lambda: self.ImportFile("new")).grid(row=0,column=2)
    self.newButton = Button(mainFrame, text="Save As", fg="blue", command=lambda: self.SaveAs()).grid(row=0,column=3)
    self.animateButton = Button(mainFrame, text="Animate", fg="blue", command=lambda: self.MakeAnimation()).grid(row=0,column=4)
    self.aboutButton = Button(mainFrame, text="About", fg="red", command=lambda: self.ShowAbout()).grid(row=0,column=5)
    self.stepRightButton = Button(mainFrame, text="Step Right ->", fg="blue", command=lambda: self.Step("right")).grid(row=0,column=6)
    self.stepLeftButton = Button(mainFrame, text="<- Step Left", fg="blue", command=lambda: self.Step("left")).grid(row=0,column=0)

    self.textArea = Text(self, state="normal")            #Text area to generate and edit ASCII

    self.textArea.grid()
    mainFrame.grid()
    designFrame.grid()
     
  def ImportFile(self, type):                                  #loads a file from disk into an array of panels
    myFormats = [("ASCII","*.ascii")]                          #allowable formats to open
    
    if type == "new" or self.fileName == "":                  
      self.fileName = tkFileDialog.askopenfilename(parent=self,filetypes=myFormats ,title="Open Animation") 
      self.ImportFile("old")
   
    del self.ASCII_Panels                                      #clear the values of the panel array 
    self.ASCII_Panels = []                                     #need to delete entire array, clearing items failed
    
    localPanel = []
    f = open(self.fileName, 'r')
    for row in f:
      localPanel.append(row.rstrip())
      if row.count("&") != 0:
        panel = Panel(localPanel)
        del localPanel
        localPanel = []                   
        self.ASCII_Panels.append(panel)
    f.close()
    self.totalFrame = len(self.ASCII_Panels)
    self.Step("right")                                        #advance one panel after loading
    
  def SaveAs(self):             
    myFormats = [("ASCII","*.ascii")]
    self.saveFile = tkFileDialog.asksaveasfilename(parent=self,filetypes=myFormats ,title="Save the animation as...")
    self.fileName = self.saveFile
    self.Step("right")

  def ShowAbout(self):              
    import tkMessageBox                                     # need to make a scrolling text pane, maybe another Text() area
    info = []
    file = open("aboutDoc.txt")
    info = file.read()
    tkMessageBox.showinfo("About this application", info)

  def Step(self, direction):                                #step into the next frame

    self.SavePanel()                                      

    if self.currentFrame >= self.totalFrame:              
      self.totalFrame += 1
      self.UpdatePanel("append")
    else: 
      self.UpdatePanel("update")
    
    self.SaveASCII()
    self.textArea.delete(1.0,END)

    if direction == "left":
      self.currentFrame -= 1
    elif direction == "right":
      self.currentFrame += 1

    try:
      tempPanel = self.ASCII_Panels[self.currentFrame].getPanel()
      for index in range(len(tempPanel)):
        tempPanel[index] = tempPanel[index].replace("&","")
        self.textArea.insert(INSERT, tempPanel[index])
        self.textArea.insert(INSERT, "\n")
    except:
      pass
    
    self.textArea.delete(END,END)
    self.update()

  def UpdatePanel(self, type):                                #update the ASCII array to reflect edited panels
    localPanel = []         
    f = open("temp.tmp", 'r')
    for row in f:
      localPanel.append(row.rstrip())
      if row.count("&") != 0:
        panel = Panel(localPanel)               
        if type == "update":
          self.ASCII_Panels[self.currentFrame] = panel
        else:
          self.ASCII_Panels.append(panel)
    f.close()
 
  def SavePanel(self):                                        #Copies the text area and saves the updated panel in a temp file             
    aBuffer_Panels = []                                       #allows me to reuse some of the syntax and formatting I utilized with
    temp = self.textArea.get(1.0, END)                        #import file.
    temp = temp.rstrip()
    temp += '&'
    panel = Panel(temp)
    file = open("temp.tmp",'w')
    file.write(panel.getPanel())
    file.close()

  def SaveASCII(self):                                        #write the entire list of panels to file
    file = open(self.saveFile, 'w')
    for index in range(len(self.ASCII_Panels)):               
      panel = self.ASCII_Panels[index]
      panel.writePanel(self.saveFile)

  def MakeAnimation(self):                                     #passes a file name to the Animator class, displays, then destroy animation
    if self.fileName == "":
      self.ImportFile("old")    
    self.newAnimator = Animator(self.saveFile)  
    self.newAnimator.Animate()
    self.newAnimator.destroy()

def main():
  canvas = Canvas()
  canvas.mainloop()
  
if __name__ == "__main__":
  main()
