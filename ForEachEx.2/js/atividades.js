const btn = document.getElementById("btn");

btn.addEventListener("click", generateSquare);

function generateSquare(){
    const valor = document.getElementById("insert").value;
    for(let i = 1; i <= valor; i++){
        square = document.createElement("div");
        square.classList.add("square");
        document.body.appendChild(square);
    }
}

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", ()=> {
    nomes.forEach((nomes) => {
        alert("olá, " + nomes + "! Seja bem vindo!");
    });
});

const nomes =["Ana", "João", "Carlos"];

nomes.forEach((nomes) => {
    console.log ("olá, " + nomes + "! Seja bem vindo!");
});


const numbers = ["1", "4", "7", "10", "16", "12"];

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", ()=> {
numbers.forEach((numbers) => {
    if((numbers%2) === 0){
        alert("numeros pares: " + numbers);
    }
    
});
});
