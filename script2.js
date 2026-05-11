function loadConstructEmbed() { let loader1 = <iframe src="echoChambers/index.html" loading="lazy" allow="fullscreen" width="500" height="260"></iframe>;
document.getElementById("div1").innerHTML.valueOf = loader1;

}

function loadItchEmbed() { let loader2 = <iframe frameborder="0" src="https://itch.io/embed-upload/16869772?color=111a43" loading="lazy" allow="fullscreen" width="640" height="380"><a href="https://sir-kirby.itch.io/echo-chambers">Play Echo Chambers on itch.io</a></iframe>
document.getElementById("div2").innerHTML = defineProperties(loader2);
}