let globalColor = ""; 

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        globalColor = "pink";
        cambiarColor(globalColor)
    }
    else if (event.key === "s") {
        globalColor = "orange";
        cambiarColor(globalColor)
    }
    else if (event.key === "d") {
        globalColor = "skyblue";
        cambiarColor(globalColor)
    }
    else if (event.key === "q") {
        createDiv("purple")
    }
    else if (event.key === "w") {
        createDiv("gray")
    }
    else if (event.key === "e") {
        createDiv("brown")
    }
    });

function cambiarColor(color) {
    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = color;
}

function createDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "1px solid black";
    document.body.appendChild(newDiv)
}
