function pintar(element, color = "green") {
    element.style.backgroundColor = color;
}

document.getElementById("div1").addEventListener("click", function() { pintar(this, "black"); });
document.getElementById("div2").addEventListener("click", function() { pintar(this, "black"); });
document.getElementById("div3").addEventListener("click", function() { pintar(this, "black"); });
document.getElementById("div4").addEventListener("click", function() { pintar(this, "black"); });

