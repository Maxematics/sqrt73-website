function* d(b=10){
    yield* ["±",...(8).toString(b),"."];
    let b0 = b, g = 8n; 
    n = 73n; 
    b = BigInt(b);
    while (true){
        let pb = b;
        g *= b;
        b *= b;
        n *= b;
        g = (g + n / g) >> 1n;
        yield*
        (g % pb + pb).toString(b0).substring(1);
        }
}
sillydiv = document.currentScript.parentElement;
digits = d()
let last = 0
sillydiv.addEventListener("pointermove",e=>{
let now = Date.now();
if (now - last < 50) return;
last = now;
let el = document.createElement("span");
el.textContent=digits.next().value;
el.setAttribute("style", `user-select: none; pointer-events: none; position: fixed; left:${e.clientX}px; top:${e.clientY}px; color:rgb(${[0,1,2].map(v=>Math.floor(Math.random()*180))})`);
            
            
sillydiv.appendChild(el)
setTimeout(() => sillydiv.removeChild(el), 250)
}, );