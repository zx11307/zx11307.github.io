try{
   var b=getRandom(4);
		$("#mh",parent.document.body).attr("src","/bg"+b+".html") 
    
}catch(e){}

function getRandom(n){
	return Math.floor(Math.random()*n+1)
}
