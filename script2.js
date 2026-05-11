function loadConstructEmbed() { const loader1 = <iframe src="echoChambers/index.html" allow="fullscreen" width="500" height="260"></iframe>;
// const div = document.getElementById("button10")
// document.getElementById("button10").innerHTML = appendChild(loader1);
// div.append(loader1)
}

function loadItchEmbed() {// let loader2 = <iframe frameborder="0" src="https://itch.io/embed-upload/16869772?color=111a43" allow="fullscreen" width="640" height="380"><a href="https://sir-kirby.itch.io/echo-chambers">Play Echo Chambers on itch.io</a></iframe>
//document.getElementById("div2").innerHTML = defineProperties(loader2);
let x = document.createElement("IFRAME");
x.setAttribute("src","https://itch.io/embed/3944305?linkback=true&amp;bg_color=1e39a1&amp;fg_color=43e5fa&amp;link_color=63cb9b&amp;border_color=3e4770");
// x.setAttribute("width","400px");
// x.setAttribute("height","200px");
// x.setAttribute("name","Echo Chambers by Sir_Kirby!");
document.body.appendChild(x);
}