const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    const obj = document.createElement("div");

    obj.style.width ="100px";
    obj.style.height ="100px";
    obj.style.backgroundColor ="red";
    obj.style.position = "absolute";
    obj.style.left ="100px";

    let x = Math.random()*window.innerWidth -5;
    let y = Math.random()*window.innerHeight -5;

    obj.style.left = x + "px";
    obj.style.top = y + "px";

    document.body.appendChild(obj);
});