# Instaget

JavaScript and Python scripts for downloading all pictures from Instagram accounts you have permission to see

### Version
1.0

### Setup
Make sure you have Python installed

Make sure you have the following packages:
```sh
> pip install requests
```

### Usage
Open the Instagram account

Copy contents of browserScript.js and paste in console

Hit enter

Wait for some time. The browser shall scroll down automatically for some time and then scroll up after finish.

Copy contents of the created textbox and paste in a new file `fileList.txt`   

Create folder `ins` in the same directory as `fileList.txt`

Then run

```sh
> python pythonScript.py
```
An error might occur at the end of completion. Ignore it. It occurs because of the way in which Linux and Windows use newlines

All images will be present in the folder `ins`

### Upcoming features
These feautres are currently being worked upon:
* Greasemonkey/Tampermonkey scripts :)
* Extract videos
