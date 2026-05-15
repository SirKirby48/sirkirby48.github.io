

function HelloWRLD() {
document.getElementById("output1").innerHTML = "Hello World!";
console.log("Hello World!");
}
  
let text
{ if (Math.random() < 0.5) {
text = "Hello there!";
} else {
text = "Good Day to You!";
}
document.getElementById("output2").innerHTML = text; }

function double(anum) { let text2 = "";
console.log(anum);
text2 = document.getElementById("NumberInput1").valueAsNumber * 2;
document.getElementById("output3").innerHTML = text2;
console.log(text2);
return anum * 2
}
function flipacoinFunction(){ let text3 = "";  const text4 = "It is ... ";
if (Math.random() < 0.5) {
text3 = "Heads";
} else {
text3 = "Tails";
}
document.getElementById("output4").innerHTML = text4 + text3; 
console.log(text3);
return text3
}
function NumberFunction1() {
    document.getElementById("output5").innerHTML = document.getElementById("NumberInput11").valueAsNumber+document.getElementById("NumberInput12").valueAsNumber;
    console.log(NumberInput11.valueAsNumber+NumberInput12.valueAsNumber);
    return NumberInput11.valueAsNumber+NumberInput12.valueAsNumber;
  }

  function NumberFunction2() {
    document.getElementById("output7").innerHTML = document.getElementById("NumberInput21").valueAsNumber*document.getElementById("NumberInput22").valueAsNumber;
    console.log(NumberInput21.valueAsNumber*NumberInput22.valueAsNumber);
    return NumberInput21.valueAsNumber*NumberInput22.valueAsNumber;
  }

  function NumberFunction3() {
    console.log(NumberInput31.valueAsNumber/NumberInput32.valueAsNumber);
    if ((NumberInput31.valueAsNumber / NumberInput32.valueAsNumber) == Infinity) {document.getElementById("output8").innerHTML = "Divide By 0 Error"}
    else {document.getElementById("output8").innerHTML = document.getElementById("NumberInput31").valueAsNumber/document.getElementById("NumberInput32").valueAsNumber}
    console.log(document.getElementById("output8").innerHTML);
    return NumberInput31.valueAsNumber / NumberInput32.valueAsNumber;
  }

  function NumberFunction4() {
    document.getElementById("output9").innerHTML = document.getElementById("NumberInput41").valueAsNumber-document.getElementById("NumberInput42").valueAsNumber;
    console.log(NumberInput41.valueAsNumber-NumberInput42.valueAsNumber);
    return NumberInput41.valueAsNumber-NumberInput42.valueAsNumber;
  }

function RolltheDiceFunction() {const numbervar2 = 1; let text6 = "";  const text5 = "The dice result is..... "; let NumberDice = document.getElementById("DicedInput").valueAsNumber;

text6 =  text5 + (Math.floor(Math.random() * (NumberDice - numbervar2)) + numbervar2);
 document.getElementById("output6").innerHTML = text6;
 console.log(numbervar2);
  console.log(text6);
return text6
  }