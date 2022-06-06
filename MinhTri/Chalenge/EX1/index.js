const inp1 = document.getElementById("inp1")
const inp2 = document.getElementById("inp2")
const button = document.getElementById("button")
const res = document.getElementById("res")

button.addEventListener("click",()=>{
    const minvalue = parseInt(inp1.value)<parseInt(inp2.value)? parseInt(inp1.value):parseInt(inp2.value)
    const maxvalue = parseInt(inp1.value)>parseInt(inp2.value)? parseInt(inp1.value):parseInt(inp2.value)

    for(let i = minvalue;i<maxvalue;i++){
        if(Math.sqrt(i) - parseInt(Math.sqrt(i)) == 0 && i>=0){
            res.innerText +=i+"  ;  "
        }
    }
})


