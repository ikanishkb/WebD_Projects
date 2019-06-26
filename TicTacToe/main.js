var counter = 0
function handleClick(id){
    var elem = document.getElementById(id)
    if(elem.innerHTML != "?"){
        return false
    }
    else{
        var currentPlayer = getPlayer(counter)
        elem.innerHTML = currentPlayer;
        counter++;
        won();
    }
}

const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]

function won(){
    if(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("2").innerHTML == "X" &&
    document.getElementById("3").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("4").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("6").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("7").innerHTML == "X" &&
    document.getElementById("8").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("3").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("7").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("2").innerHTML == "X" &&
    document.getElementById("3").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("1").innerHTML == "X" &&
    document.getElementById("4").innerHTML == "X" &&
    document.getElementById("7").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("2").innerHTML == "X" &&
    document.getElementById("5").innerHTML == "X" &&
    document.getElementById("8").innerHTML == "X"){
        alert("X won")
    }
    if(document.getElementById("3").innerHTML == "X" &&
    document.getElementById("6").innerHTML == "X" &&
    document.getElementById("9").innerHTML == "X"){
        alert("X won")
    }
    
    if(document.getElementById("1").innerHTML == "O" &&
    document.getElementById("2").innerHTML == "O" &&
    document.getElementById("3").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("4").innerHTML == "O" &&
    document.getElementById("5").innerHTML == "O" &&
    document.getElementById("6").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("7").innerHTML == "O" &&
    document.getElementById("8").innerHTML == "O" &&
    document.getElementById("9").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("1").innerHTML == "O" &&
    document.getElementById("5").innerHTML == "O" &&
    document.getElementById("9").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("3").innerHTML == "O" &&
    document.getElementById("5").innerHTML == "O" &&
    document.getElementById("7").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("1").innerHTML == "O" &&
    document.getElementById("2").innerHTML == "O" &&
    document.getElementById("3").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("1").innerHTML == "O" &&
    document.getElementById("4").innerHTML == "O" &&
    document.getElementById("7").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("2").innerHTML == "O" &&
    document.getElementById("5").innerHTML == "O" &&
    document.getElementById("8").innerHTML == "O"){
        alert("O won")
    }
    if(document.getElementById("3").innerHTML == "O" &&
    document.getElementById("6").innerHTML == "O" &&
    document.getElementById("9").innerHTML == "O"){
        alert("O won")
    }
}

function getPlayer(counter){
    if(counter%2 == 0){
        return "X"
    }else{
        return "0"
    }
}

function restart(){
    var ids = ["1","2","3","4","5","6","7","8","9"]
    ids.map((id)=>{
        document.getElementById(id).innerHTML = "?" 
    })
    counter = 0;
}