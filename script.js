

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
if (isNaN(document.getElementById("NumberInput1").valueAsNumber)) {text2 = "Enter a number, not nothing!"} else {text2 = document.getElementById("NumberInput1").valueAsNumber * 2;};
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
  var a = document.getElementById("NumberInput11").valueAsNumber;
  var b = document.getElementById("NumberInput12").valueAsNumber;
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("output5").innerHTML = "Enter a number, not nothing!";
    console.log('NumberFunction1: invalid input', a, b);
    return;
  }
  var sum = a + b;
  document.getElementById("output5").innerHTML = sum;
  console.log(sum);
  return sum;
  }

  function NumberFunction2() {
    var a = document.getElementById("NumberInput21").valueAsNumber;
    var b = document.getElementById("NumberInput22").valueAsNumber;
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("output7").innerHTML = "Enter a number, not nothing!";
        console.log('NumberFunction2: invalid input', a, b);
        return;
    }
    var product = a * b;
    document.getElementById("output7").innerHTML = product;
    console.log(product);
    return product;
  }

  function NumberFunction3() {
    var a = document.getElementById("NumberInput31").valueAsNumber;
    var b = document.getElementById("NumberInput32").valueAsNumber;
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("output8").innerHTML = "Enter a number, not nothing!";
        console.log('NumberFunction3: invalid input', a, b);
        return;
    }
    if (b === 0) {
        document.getElementById("output8").innerHTML = "Divide By 0 Error";
        console.log('NumberFunction3: divide by zero');
        return;
    }
    var quotient = a / b;
    document.getElementById("output8").innerHTML = quotient;
    console.log(quotient);
    return quotient;
  }

  function NumberFunction4() {
    var a = document.getElementById("NumberInput41").valueAsNumber;
    var b = document.getElementById("NumberInput42").valueAsNumber;
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("output9").innerHTML = "Enter a number, not nothing!";
        console.log('NumberFunction4: invalid input', a, b);
        return;
    }
    var diff = a - b;
    document.getElementById("output9").innerHTML = diff;
    console.log(diff);
    return diff;
  }

function RolltheDiceFunction() {const numbervar2 = 1; let text6 = "";  const text5 = "The dice result is..... "; let NumberDice = document.getElementById("DicedInput").valueAsNumber;
if (NumberDice < 2 || isNaN(NumberDice)) {text6 =  "Your input is less than 2 or it is not a number"} else {text6 =  text5 + (Math.floor(Math.random() * (NumberDice - numbervar2)) + numbervar2);};
document.getElementById("output6").innerHTML = text6;
 console.log(numbervar2);
  console.log(text6);
return text6
  }

/* Autosize inputs: expand width when content overflows */
(function(){
  function measureText(text, input) {
    // create a temporary span for accurate width measurement
    var span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'pre';
    span.style.font = window.getComputedStyle(input).font || '';
    span.textContent = text || input.placeholder || input.value || '';
    document.body.appendChild(span);
    var w = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return w;
  }

  function autosizeInput(input) {
    if (!input) return;
    var padding = 32; // account for left/right padding
    var min = 120; // px
    var max = Math.min(window.innerWidth * 0.9, 900); // don't grow beyond viewport or a sane cap
    var text = input.value || input.placeholder || '';
    var measured = measureText(text, input) + padding;
    var newWidth = Math.max(min, Math.min(measured, max));
    input.style.width = newWidth + 'px';
  }

  function bindAll() {
    var inputs = document.querySelectorAll('.input, input, input[type="number"], input[type="text"]');
    inputs.forEach(function(i){
      autosizeInput(i);
      i.addEventListener('input', function(){ autosizeInput(i); });
      // also adjust on change for programmatic value changes
      i.addEventListener('change', function(){ autosizeInput(i); });
    });
  }

  document.addEventListener('DOMContentLoaded', bindAll);
  window.addEventListener('resize', function(){
    document.querySelectorAll('.input, input, input[type="number"], input[type="text"]').forEach(function(i){ autosizeInput(i); });
  });
})();