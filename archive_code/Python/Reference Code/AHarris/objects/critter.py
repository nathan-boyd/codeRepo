""" Critter.py
    Basic critter class """
    
class Critter(object):
  def __init__(self):
    object.__init__(self)
    self.name = "I have no name"
    
  def sayHi(self):
    print "Hi, my name is %s!" % self.name
    

def main():  
  c = Critter()
  c.name = "George"
  c.sayHi()
  
main()



