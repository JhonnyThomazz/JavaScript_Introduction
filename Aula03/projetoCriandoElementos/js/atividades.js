function criarBlue(){
    const quad = document.getElementById("Quadrados");
    const square = document.createElement("div");

    square.classList.add("Blue");

    quad.appendChild(square);
}
function criarRed(){
    const quad = document.getElementById("Quadrados");
    const Rsquare = document.createElement("div");

    Rsquare.classList.add("Red");

    quad.appendChild(Rsquare);
}  
function criarBluRed(){
    const square = document.createElement("div");
    const square2 = document.createElement("div");
    document.body.appendChild(square);
    square2.classList.add("Red2");
    square.classList.add("Blue");

    square.appendChild(square2);

}
''