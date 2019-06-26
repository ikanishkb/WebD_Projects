var str = ""
var FinalResult = 0
var clrResult = 0

function calculate(val){

    if(!validate(str,val)){
        return false;
    }

    var elem = document.getElementById("display");

    if (val == "="){
        FinalResult=eval(str);
        str=FinalResult;
        elem.innerHTML = FinalResult;
    }

    else if (val == "CLR"){
        FinalResult = clrResult;
        elem.innerHTML = clrResult;
    }

    else if (val == "DEL"){
        str = str.substring(0,str.length-1);
        elem.innerHTML=str;
    }

    else{
        str += val;
        elem.innerHTML = str;
    }
}

function validate(str,val){
    let prevVal = str[str.length-1];
    let currentVal = val;
    if(["-","=","*","/","+"].includes(prevVal) && ["-","=","*","/","+"].includes(currentVal)){
        return false;
    }
    return true;
}