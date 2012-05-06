""" overload.py
    overloaded methods
    (particularly constructor)
"""

class Critter(object):
    
  def __init__(self, name = "Anonymous"):
    object.__init__(self)
    self.name = name
    
c = Critter()
print c.name
d = Critter("George")
print d.name

