const frutas = ["maçã", "banana", "laranja"];

const lista = document.getElementById('lista-frutas');

frutas. forEach((fruta, indice) => {
    console.log(`${indice}:${fruta}`);

    const item = document. createElement("li");
    item.textContent = `${indice + 1} - ${fruta}`;
    lista.appendChild(item);
});