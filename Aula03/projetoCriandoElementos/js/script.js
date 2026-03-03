function criar(){
    const texto = document.createElement("div");
    texto.textContent = "Hello there!"

    texto.classList.add("style");

    document.body.appendChild(texto);
}

function dark(){
    document.body.classList.add("darkMode")
}

function light(){
    document.body.classList.remove("darkMode")
}

function DarkMode(){

    if(document.body.classList.contains ("dark")){
        document.body.classList.replace("dark","light");
    }
    else if(document.body.classList.contains ("light")){
        document.body.classList.replace("light", "dark");
    }
    else{
        document.body.classList.add("dark");
    }
}
function ULTIMATEDARK(){
    document.body.classList.toggle("dark");
}