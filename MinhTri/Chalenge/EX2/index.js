const container = document.getElementById("container")
const span = document.getElementById("span")
const span2 = document.getElementById("span2")
const btnChange = document.getElementById("btn-change")
const btnCopy = document.getElementById("btn-copy")
const btncopy2 = document.getElementById("btn-copy2")

btnChange.addEventListener("click",()=>{
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let yelow = Math.floor(Math.random()*255)
    let redhex = red.toString(16)
    let greenhex = green.toString(16)
    let yelowhex = yelow.toString(16)
    let strGrb = "grb("
    strGrb+=red+","+green+","+yelow+")"
    span2.innerText = strGrb
    let strHex = "#"
    strHex+= redhex+greenhex+yelowhex
    span.innerText = strHex
    container.style.background = strHex
})
btnCopy.addEventListener("click",()=>{
    const cb = navigator.clipboard;
    const para = document.querySelector("#span");
    cb.writeText(para.innerText).then(() => alert('color copiled'));
})

btncopy2.addEventListener("click",()=>{
    const cb = navigator.clipboard;
    const para = document.querySelector("#span2");
    cb.writeText(para.innerText).then(() => alert('color copiled'));
})




