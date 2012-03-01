
"""HelloGUI.py
   Demo of GUI programming with Tkinter and OOP
"""

from Tkinter import*

class App(Frame):

    def __init__(self):
        self.lblOutput = Label(self, text = "Hi there")
        self.lblOutput.grid()

app = App()
app.mainloop()
