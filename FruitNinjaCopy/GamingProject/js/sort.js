const btn = document.getElementById("btn");
const obj = document.createElement("div");

obj.addEventListener("click", ()=>{
 obj.remove
});

btn.addEventListener("click", ()=>{
    const pause =setInterval(() => {
        
    obj.style.width ="100px";
    obj.style.height ="100px";
    obj.style.backgroundColor ="red";
    obj.style.position = "absolute";
    obj.style.left ="100px";

    let x = Math.random()*window.innerWidth -150;
    let y = Math.random()*window.innerHeight -150;

    obj.style.left = x + "px";
    obj.style.top = y + "px";

    document.body.appendChild(obj);
    }, 1000);
    
   
   btn2.addEventListener("click", ()=>{
    clearInterval(pause);
    obj.remove();
});

});

