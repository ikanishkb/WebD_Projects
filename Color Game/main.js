var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 255)"
]

var squares = document.getElementsByClassName("square");
var pickedcolor = pickColor();
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("rgb");
colorDisplay.textContent = pickedcolor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor){
            messageDisplay.textContent = "Correct guess!"
            changeColor(clickedcolor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
}