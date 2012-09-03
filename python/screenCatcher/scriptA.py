import subprocess

p = subprocess.Popen(['python', 'ScreenCatcher.py'], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

p.stdin.write("word")
p.stdin.flush()
print 'script returned', p.stdout.readline().strip()

p.stdin.write("firefox")
p.stdin.flush()
print 'script returned', p.stdout.readline().strip()

p.stdin.write("calc")
p.stdin.flush()
print 'script returned', p.stdout.readline().strip()