const numero = document.getElementById("numero");
const btn = document.getElementById("btn")
const emoji = ["🤘", "👌", "🐒", "🤌", "🎶"]

btn.addEventListener("click", ()=> {
    numero.textContent = emoji[Math.floor(Math.random()*5)];
    clearInterval(auto)
});

const auto = setInterval(() => {
    numero.textContent = emoji[Math.floor(Math.random()*5)];
}, 1000);


const games = ["DOOM", "ULTRAKILL", "DUSK", "TURBO OVERKILL", "NEED FOR SPEED MOST WANTED"]
numero.textContent = games[2];

