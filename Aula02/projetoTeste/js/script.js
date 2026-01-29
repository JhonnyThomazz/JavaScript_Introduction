//const nome = document.getElementById("nomeId");
//const nome = document.getElementById("nomeId").value - utiliza para input
//nome.textContent = "valor alterado";
//valor.textContent = parseInt(valor.textContent) + 1;
//function verify(){
//const value = document.getElementById("ternario").value;

//(value ==="1")? alert("O número inserido é 1"):("O número inserido é 2");
//if(value ==="1"){
//    alert("O número inserido é 1.")
//}
//else{
//    alert("O número inserido é 2.")
//}
//}
function pesquisar(){
    const name = document.getElementById("nome").value;
    const img = document.getElementById("imagem");

    if(name === "digimon" || name === "Digimon"){
        img.setAttribute("src", "img/Digimon.png");
    }
    else if(name === "Dragon ball" || name === "dragon ball"){
        img.setAttribute("src", "img/DragonBallGT.png");
    }
    else if(name ==="Google"){
        window.location.href = "https://www.google.com/"
        img.setAttribute("src", "img/Duvida.png");
    }
}