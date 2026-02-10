const button = document.getElementById("btn");

button.addEventListener("click", () => {
   alteraFundo();
});
function alteraFundo(){

    const fundo = document.body;
    fundo.style.backgroundColor = fundo.style.backgroundColor == "black" ? "red" : "black";
}

const btnActive = document.getElementById("calc");

btnActive.addEventListener("click", () => {
    const value01 = parseInt(document.getElementById("value01").value);
    const value02 = parseInt(document.getElementById("value02").value);

    let somar = (value01 + value02);

    alert("O resultado da conta é:" + somar);
})
