function incrementar(){
    const increment = document.getElementById("cont");
    increment.textContent = parseInt(increment.textContent) + 1;
}

function decrementar(){
    const decrement = document.getElementById("cont");
    decrement.textContent = parseInt(decrement.textContent) - 1;
}

function resetar(){
    const reset = document.getElementById("cont");
    reset.textContent = 0;
}