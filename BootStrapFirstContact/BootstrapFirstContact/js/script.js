function saveUser(){
const nameIn = document.getElementById("nome").value;
const age = document.getElementById("idade").value;

const usuario = {
    nome: nameIn,
    idade: age
}; 

//Salva Usuários no localStorage
const usuarios = buscarUser();
usuarios.push(usuario);
localStorage.setItem("usuarios", JSON.stringify(usuarios));


document.getElementById("nome").value = '';
document.getElementById("idade").value = '';

carregarUser();

};


function buscarUser(){
const items = localStorage.getItem("usuarios");
return items ? JSON.parse(items) : [];
};


function carregarUser(){
    const ul = document.getElementById("list")

    const usuarios = buscarUser();

    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario. nome}, ${usuario. idade}`;
        ul.appendChild(li);
    });
};
window.onload = carregarUser();
