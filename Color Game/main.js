var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.getElementsByClassName("square");
var pickedcolor = pickColor();
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("rgb");
colorDisplay.textContent = pickedcolor;
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numberOfSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#232323";
    }
})

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor){
            messageDisplay.textContent = "Correct guess!"
            changeColor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            resetButton.textContent = "Play Again";
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

function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);
    var string = `rgb(${r}, ${g}, ${b})`;
    console.log(string);
    return string;
}

var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
    numberOfSquares = 3;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#232323";
    }
})

hardbtn.addEventListener("click",function(){
    numberOfSquares = 6;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display = "block";
        h1.style.backgroundColor = "#232323";
    }
})