from Tkinter import *
from tkMessageBox import *

class App(Tk):
  def __init__(self):
    Tk.__init__(self)
    
    Label(self, text = "Button").grid(row = 0, column = 0)
    btnButton = Button(self, text = "Click Me")
    btnButton.grid(row = 0, column = 1)
    
    Label(self, text = "Checkbutton").grid(row = 1, column = 0)
    chkCheck = Checkbutton(self, text = "Check Button")
    chkCheck.grid(row = 1, column = 1)

    Label(self, text = "Entry").grid(row = 2, column = 0)
    txtEntry = Entry(self)
    txtEntry.grid(row = 2, column = 1)
    
    Label(self, text = "Listbox").grid(row = 3, column = 0)
    lstList = Listbox(self, height = 3)
    lstList.grid(row = 3, column = 1)
    lstList.insert(END, "one", "two", "three")

#    Label(self, text = "Message").grid(row = 4, column = 0)
#    self.msgMessage = Tkinter.Message(self)
#    self.msgMessage.grid(row = 4, column = 1)
#    self.msgMessage["text"] = "Multi-\nline\nlabel"

    self.radVar = IntVar()

    # the intvar will automatically update when the radio button is changed
    # there is a IntVar.get() to get the integer value of the clicked button

    Label(self, text = "Radio Buttons").grid(row = 5, rowspan = 2)
    radRadio1 = Radiobutton(self, text = "one", variable = self.radVar, value = 1)
    radRadio2 = Radiobutton(self, text = "two", variable = self.radVar, value = 2)
    radRadio1.grid(row = 5, column = 1)
    radRadio2.grid(row = 6, column = 1)
    
    #self = scrVar = IntVar()
    Label(self, text = "Scale").grid(row = 7, column = 0)
    self.scrScale = Scale(self, orient = HORIZONTAL, to = 255)
    self.scrScale.grid(row = 7, column = 1)
    
    Label(self, text = "Spinbox").grid(row = 8, column = 0)
    self.spnSpin = Spinbox(self, values = ("one", "two", "three"))
    self.spnSpin.grid(row = 8, column = 1)
    
    Label(self, text = "Message Box").grid(row = 9, column = 0)
    self.btnMessage = Button(self, text = "click for dialogs")
    self.btnMessage["command"] = self.showMessage
    self.btnMessage.grid(row = 9, column = 1)
    
    Label(self, text = "Top Level").grid(row = 10, column = 0)
    self.btnTop = Button(self, text = "click for new window")
    self.btnTop["command"] = self.showTop
    self.btnTop.grid(row = 10, column = 1)
    
    self.mainloop()
    
  def showMessage(self):
    showinfo("Info", "I'm an info box")
    result = askquestion("question", "Are we having fun yet?")
    showinfo("", "You said %s." % result)
    
  def showTop(self):
    self.newWindow = Toplevel(self)
    Label(self.newWindow, text = "Hi there").grid()
    self.newWindow.grid()
    
    # child relationship is important to make windoes close together
    # better idea is to make it a seperate class

def main():
  app = App()
  
if __name__ == "__main__":
  main()
