class Panel():
  def __init__(self, pStrings): 
    self.listPanel = pStrings
    self.Strings = pStrings

  def getPanel(self):                    #returns a list of strings
    return self.listPanel
    
  def writePanel(self, pFileName):       #appends an individual panel to a file when passed the file name
    file = open(pFileName, 'a')          #as a parameter
    for item in self.listPanel:
      file.write(item)
      file.write("\n")
