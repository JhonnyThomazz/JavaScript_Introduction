const btn = document.getElementById("btn");


btn.addEventListener("click", gerarTexto);

function gerarTexto(){
    const valor = document.getElementById("nVezes").value;
    for(let i = 1; i <= valor; i++){
        texto = document.createElement("h1");
        texto.textContent = "Jhonny cage rules.";
        document.body.appendChild(texto);
    }

}