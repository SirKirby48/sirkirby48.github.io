function HelloWRLD() {
document.getElementById("output1").innerHTML = "Hello World!";
console.log("HELLO YOU!");
}
  
let text
{ if (Math.random() < 0.5) {

/* Autosize inputs: expand width when content overflows (copied/adapted from script.js) */
(function(){
	function measureText(text, input) {
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
		var min = 60; // smaller default for stat inputs
		var max = Math.min(window.innerWidth * 0.9, 900);
		var text = input.value || '';
		var measured = measureText(text, input) + padding;
		var newWidth = Math.max(min, Math.min(measured, max));
		input.style.width = newWidth + 'px';
	}

	function bindAll() {
		// target the inputs used by this script
		var inputs = [];
		['FirstINT','SecondINT','ThirdINT'].forEach(function(id){
			var el = document.getElementById(id);
			if (el) inputs.push(el);
		});
		// include any other number/text inputs on the page
		document.querySelectorAll('input[type="number"], input[type="text"]').forEach(function(i){
			if (inputs.indexOf(i) === -1) inputs.push(i);
		});

		inputs.forEach(function(i){
			autosizeInput(i);
			i.addEventListener('input', function(){ autosizeInput(i); });
			i.addEventListener('change', function(){ autosizeInput(i); });
		});
	}

	document.addEventListener('DOMContentLoaded', bindAll);
	window.addEventListener('resize', function(){ bindAll(); });
})();
text = "Hello there!";
} else {
text = "Good Day to You!";
}
document.getElementById("output2").innerHTML = text; }

stat1 = FirstINT.value 
function firstChange() { let stat1 = FirstINT.value;

document.getElementById("FirstResult").innerHTML = stat1;

}

function oneadd1() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 + 1;
console.log("+1");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}

function oneadd15() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 + 5;
console.log("+5");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}

function oneminus1() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 - 1;
console.log("-1");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}

function oneminus15() { let stat1 = Number(FirstINT.value);
console.log(stat1);
stat1 = stat1 - 5;
console.log("-5");
console.log(stat1);
document.getElementById("FirstResult").innerHTML = stat1;
FirstINT.value = stat1;
console.log(FirstINT.value);
console.log(stat1);

}

stat2 = SecondINT.value 
function SecondChange() { let stat2 = SecondINT.value;

document.getElementById("SecondResult").innerHTML = stat2;

}

function oneadd2() {  let stat2 = Number(SecondINT.value);
console.log(stat2);
stat2 = stat2 + 1;
console.log("+1");
console.log(stat2);
document.getElementById("SecondResult").innerHTML = stat2;
SecondINT.value = stat2;
console.log(SecondINT.value);
console.log(stat2);

}

function oneadd25() {  let stat2 = Number(SecondINT.value);
console.log(stat2);
stat2 = stat2 + 5;
console.log("+5");
console.log(stat2);
document.getElementById("SecondResult").innerHTML = stat2;
SecondINT.value = stat2;
console.log(SecondINT.value);
console.log(stat2);

}

function oneminus2() { let stat2 = Number(SecondINT.value);
console.log(stat2);
stat2 = stat2 - 1;
console.log("-1");
console.log(stat2);
document.getElementById("SecondResult").innerHTML = stat2;
SecondINT.value = stat2;
console.log(SecondINT.value);
console.log(stat2);

}

function oneminus25() { let stat2 = Number(SecondINT.value);
console.log(stat2);
stat2 = stat2 - 5;
console.log("-5");
console.log(stat2);
document.getElementById("SecondResult").innerHTML = stat2;
SecondINT.value = stat2;
console.log(SecondINT.value);
console.log(stat2);

}

stat3 = ThirdINT.value 
function ThirdChange() { let stat3 = ThirdINT.value;

document.getElementById("ThirdResult").innerHTML = stat3;

}

function oneadd3() {  let stat3 = Number(ThirdINT.value);
console.log(stat3);
stat3 = stat3 + 1;
console.log("+1");
console.log(stat3);
document.getElementById("ThirdResult").innerHTML = stat3;
ThirdINT.value = stat3;
console.log(ThirdINT.value);
console.log(stat3);

}

function oneadd35() {  let stat3 = Number(ThirdINT.value);
console.log(stat3);
stat3 = stat3 + 5;
console.log("+5");
console.log(stat3);
document.getElementById("ThirdResult").innerHTML = stat3;
ThirdINT.value = stat3;
console.log(ThirdINT.value);
console.log(stat3);

}

function oneminus3() { let stat3 = Number(ThirdINT.value);
console.log(stat3);
stat3 = stat3 - 1;
console.log("-1");
console.log(stat3);
document.getElementById("ThirdResult").innerHTML = stat3;
ThirdINT.value = stat3;
console.log(ThirdINT.value);
console.log(stat3);

}

function oneminus35() { let stat3 = Number(ThirdINT.value);
console.log(stat3);
stat3 = stat3 - 5;
console.log("-5");
console.log(stat3);
document.getElementById("ThirdResult").innerHTML = stat3;
ThirdINT.value = stat3;
console.log(ThirdINT.value);
console.log(stat3);

}
