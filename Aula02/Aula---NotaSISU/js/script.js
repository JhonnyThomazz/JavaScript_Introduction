function calcularCursos() {
    const science = parseInt(document.getElementById("natureza").value);
    const humans = parseInt(document.getElementById("humanas").value);
    const language = parseInt(document.getElementById("linguagens").value);
    const math = parseInt(document.getElementById("matematica").value);
    const essay = parseInt(document.getElementById("redacao").value);

    const finalGrade = (science + humans + language + math + essay)/5;
    
    if(finalGrade >= 750) {
        alert("Os cursos disponíveis são: Medicina, Engenharia Aeronáutica e Direito.");
    }
    else if(finalGrade >= 600 && finalGrade < 750) {
        alert("Os cursos disponíveis são: Engenharia Civil, Administração e Psicologia.");
    }
    else if(finalGrade >= 450 && finalGrade < 600){
        alert("Os cursos disponíveis são: Pedagogia, Letras e Ciências Sociais.");
    }
    else {
        alert("Infelizmente, a sua nota " + "(" + finalGrade + ") " + "está abaixo da nota de corte mínima.");
    }
}