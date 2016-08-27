var totalPosts = parseInt(document.body.getElementsByTagName('li')[0].textContent.split(' ')[0]);
var current = document.getElementsByTagName('img').length - 1;

if(current<totalPosts){
	var temp = document.getElementsByTagName('a');
	var linkToCLick = temp[temp.length-13];
	linkToCLick.click();
	var myinterval;
	var windowHeight = window.screen.availHeight;
	function scroll1(){
		currentLinks = document.getElementsByTagName('a').length - 14; // To account for the number of extra links about,careers  etc.
		if(currentLinks<totalPosts){
			window.scrollTo(0,window.scrollY+windowHeight)
		}
		else{
			clearInterval(myinterval);
			startExtraction();
		}
	}
	myinterval = setInterval(scroll1, 1000);
}
else{
	startExtraction();
}

function startExtraction(){
	var stringFinal = "";
	var z = document.getElementsByTagName('img');
	for(var i=0;i<z.length;i++){
		var t = z[i].src;
		t = t.replace("/s640x640",''); // Get full size images
		t = t.replace("/s150x150",''); // Get full size images
		if(i!=0){
			var q = t.split("?ig");
			q = q[q.length-1];
			t = t.replace("?ig"+q,'');
		}
		stringFinal += t+'\n';
	}
	var nav_bar = document.getElementsByTagName('nav')[0];
	var txtArea = document.createElement('textarea');
	nav_bar.appendChild(txtArea);
	txtArea.value = stringFinal;
	window.scrollTo(0,0);
}
