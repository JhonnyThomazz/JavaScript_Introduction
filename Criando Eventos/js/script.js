const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    confirm("Parabéns, você clicou no botão.")

});



let valor = 0;
document.addEventListener("keydown", (e) =>{
    console.log(e.key);

    const quad = document.getElementById("quad");
    

    if(e.key === "ArrowRight" || e.key === "d"){
        valor += 10;
        quad.style.left = valor + "px";
    }

     if(e.key === "ArrowLeft" || e.key === "a"){
        valor -= 10;
        quad.style.left = valor + "px";
    }

     if(e.key === "ArrowUp" || e.key === "w"){
        valor -= 10;
        quad.style.top = valor + "px";
    }

     if(e.key === "ArrowDown" || e.key === "s"){
        valor += 10;
        quad.style.top = valor + "px";
    }
    
    alteraFundo();
})

function alteraFundo(){

    const fundo = document.body;
    fundo.style.backgroundColor = fundo.style.backgroundColor == "black" ? "red" : "black";
}

const btnActive = document.getElementById("")