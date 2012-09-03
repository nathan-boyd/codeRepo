from tkinter import *
import random 

class Horse(object):
    
    x1 = 0              #coordinates for the rectangles representing the horses, (x1,y1) then opposite diagonal (x2,y2)
    y1 = 0
    x2 = 25
    y2 = 25
    
    def __init__(self):
        pass
    
    def Advance(self):   
        
        rand = random.randint(0, 1)
        if(rand==1):
            self.x1+=25
            self.y1+=0
            self.x2+=25
            self.y2+=0

#        print("Horse advanced", "pos1 ", self.getx1(), "pos2 ", self.gety1(), "pos3 ", self.getx2(), "pos4 ", self.gety2())
        
    def Initialize(self,i):
        magnitude = i*25
        self.x1+=0
        self.y1+=magnitude
        self.x2+=0
        self.y2+=magnitude
            
#        print("Horse ", i, "inttialize", "pos1 ", self.getx1(), "pos2 ", self.gety1(), "pos3 ", self.getx2(), "pos4 ", self.gety2())
        
    def getx1(self):
        return self.x1
    
    def gety1(self):
        return self.y1
    
    def getx2(self):
        return self.x2
    
    def gety2(self):
        return self.y2

class Race(Frame):  
    
    aHorse = [Horse(),Horse(),Horse(),Horse(),Horse(),Horse(),Horse(),Horse(),Horse(),Horse()]
    
    def buildArray(self, iHorses):
            
        for i in range(iHorses):                    #initialize the horses to be next to each other not on top of one another
            self.aHorse[i].Initialize(i)

    def createWidgets(self):

        self.QUIT = Button(self, text = "Quit",
                                 fg = "red",
                                 command = self.quit).pack({"side": "left"})

        self.horse_label = Label(self, text="Horses to race").pack({"side": "left"})
        
        self.horse_scale = Scale(self,from_=2, to=10, length = "250", orient = "horizontal")            #demonstrating different methods to generate widgets

        self.horse_scale.pack({"side": "left"})


        
        self.Race = Button(self)
        self.Race["text"] = "Race!",    
        self.Race["command"] = lambda: self.Start(iHorses = self.horse_scale.get())
        self.Race.pack({"side": "left"})      
        
    def Start(self, iHorses):

                                                #        self.destroy(self.horse_label)
        
        self.buildArray(iHorses)                #create and initialize the horse objects
        self.horse_scale.destroy()
        self.Race.destroy()
        
        cTrack = Canvas(self, width=700, height=250)
        cTrack.pack()
        
        self.Race = Button(self)
        self.Race["text"] = "Next!"
        self.Race["command"] = lambda: self.reDraw(iHorses, cTrack)
        self.Race.pack({"side": "left"})

        ## self.NewRace = Button(self)
        ## self.NewRace["text"] = "NewRace"
        ## self.NewRace["command"] = lambda: self.Race()
        ## self.NewRace.pack({"side": "left"})        

 
    def reDraw(self, iHorses, cTrack):     
        
        colorArray = ["red", "blue", "purple", "gray", "green", "orange", "magenta", "salmon", "yellow", "pink"]
        # allows for alternating horse colors
        
        for i in range(iHorses): 
            self.aHorse[i].Advance()
           
        for i in range(iHorses): 
            winner = colorArray[i] + " horse is the winner!"
            if(self.aHorse[i].getx1() == 675):
                cTrack.delete(all)
                cTrack.create_text(275, 100, text=winner,font=('verdana', 20, 'bold'))
                self.Race.destroy()
                break
            elif(self.aHorse[i].getx1() < 675):
                cTrack.create_rectangle(self.aHorse[i].getx1(), self.aHorse[i].gety1(), self.aHorse[i].getx2(), self.aHorse[i].gety2(), fill=colorArray[i])     

       
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()
        
root = Tk()
app = Race(master=root)
app.mainloop()
