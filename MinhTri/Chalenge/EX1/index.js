const Ele = document.getElementsByTagName("input")
Ele[0].value = "input a"
Ele[1].value = "input b"

document.getElementsByClassName('btn')[0].addEventListener("click",()=>{
    const valuea = parseInt( Ele[0].value)
    const valueb = parseInt(Ele[1].value)
    i = valuea<valueb? valuea:valueb
    j = valuea>valueb? valuea:valueb 
    for(a = i;a<=j;a++){
        for( g = 2;g<a;g++){
            if(a%g ==0) break
            if(a%g !=0 && g==a-1){
                document.getElementsByClassName("result")[0].innerText+=" "+g
                console.log(g);
            }
        }
    }
})