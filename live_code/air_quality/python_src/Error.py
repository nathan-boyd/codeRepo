class Error(Exception):
    """Base class for exceptions in this module."""
    pass

class MyError(Error):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

class arduinoError(Error):
    def __init__(self, expr, msg):
        self.expr = expr
        self.msg = "failed to connect to arduino"
        
