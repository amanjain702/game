var numsquares=6;
var colors=generateRandomColors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numsquares=3
    colors=generateRandomColors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i];
    	} else{
    		squares[i].style.display="none";
    	}

    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares=6;
    colors=generateRandomColors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    	

    }

});

resetbutton.addEventListener("click",function(){
     // generate new colors
     colors=generateRandomColors(numsquares);
     //pick a new random color from array
     pickedcolor=pickcolor();
     colordisplay.textContent=pickedcolor;
     this.textContent="New colors";
     messagedisplay.textContent="";
     for(var i=0;i<squares.length;i++){
     	squares[i].style.backgroundColor=colors[i];
     }
     h1.style.backgroundColor="steelblue";

});

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
       //grab color of clicked square
       var clickedcolor=this.style.backgroundColor;
       //compare color to pickedcolor
       if(clickedcolor===pickedcolor){
       	messagedisplay.textContent="Correct!"
       	resetbutton.textContent="Play Again?";
        changecolors(clickedcolor);
        h1.style.backgroundColor=clickedcolor;
       } else{
       	this.style.backgroundColor="#232323";
       	messagedisplay.textContent="Try Again!!";
       }
    });

}


function changecolors(color){
	//lopp through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num) {
	//make an array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++){
		arr.push(randomColor());
		//get random color and into arr
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 to 255
	var r=Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var g=Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}