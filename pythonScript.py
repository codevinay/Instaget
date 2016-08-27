import requests

f = open('imageList.txt','r')
fd = f.read()
fd = fd.split('\n')
fd.pop()
cnt = len(fd)
i = 0
while i<cnt:
	url_ins = fd[i]
	fileName = fd[i].split('/')[-1]
	r = requests.get(url_ins)
	if r.status_code == 200:	
		f = open("ins/" + str(i) + fileName, "wb")
		f.write(r.content)
		f.close()
		print(i)
	i=i+1
