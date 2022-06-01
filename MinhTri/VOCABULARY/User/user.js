const valueInEnglish = document.querySelector('.english')
const valueInVN = document.querySelector('.vn')
const table = document.querySelector('.tablecontent')
const addBtn = document.querySelector('.add')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const showAllBtn = document.querySelector('.showAll')
const VobArr = []


let valueEnglish = ""
valueInEnglish.addEventListener('keyup', function () {
    valueEnglish = valueInEnglish.value;
    console.log(valueEnglish)
})

let valueVN = ""
valueInVN.addEventListener('keyup', function () {
    valueVN = valueInVN.value;
    console.log(valueVN)
})
addBtn.addEventListener('click', function () {
    if (valueEnglish && valueVN &&  valueInEnglish.value!="" && valueInVN.value!="") {
        const li = document.createElement('li')
        li.innerText = valueInEnglish.value + " có nghĩa là " + valueInVN.value
        li.addEventListener("click",(e)=>{
            if(e.target.classList.value == ""){
                e.target.classList.value += "hightlight"
            }
            else{
                e.target.classList.remove("hightlight")
            }
        })
        table.appendChild(li)  
        if(localStorage.length == 0) localStorage.setItem("VobArr",valueEnglish+"-"+valueVN+"|")      
        else localStorage.setItem("VobArr",localStorage.getItem("VobArr")+valueEnglish+"-"+valueVN+ "|")       
        valueInEnglish.value = ""
        valueInVN.value = ""
    }
})
clearBtn.addEventListener('click', function () {
    table.innerHTML = "";
})

deleteBtn.addEventListener('click',()=>{
   const leg = document.querySelectorAll('li')
   for(i of leg){
       if(i.classList.value!=""){
            let strlocal = localStorage.getItem("VobArr")
            let strRemove = i.innerText+"|"
            strRemove = strRemove.replace(" có nghĩa là ","-")
            strlocal = strlocal.replace(strRemove,"")
            localStorage.setItem("VobArr",strlocal)
            table.removeChild(i)
       }
   }
})

showAllBtn.addEventListener("click",()=>{
        let strlocal  = ""
        let strlocalARR   = JSON.parse(JSON.stringify({...localStorage.getItem("VobArr")})) 
        for(i in strlocalARR){
            strlocal +=strlocalARR[i]
        }
        console.log((strlocal));
        let indexSplit = strlocal.indexOf("|")
        console.log((indexSplit));
        while(indexSplit>0){
            indexSplit = strlocal.indexOf("|")
            if(indexSplit<0){
                strlocal = ""
                break
            }
            else{
                Strsplit = strlocal.slice(0,indexSplit+1)
                strlocal = strlocal.replace(Strsplit,"")
                Strsplit = Strsplit.replace("|","")
                Strsplit = Strsplit.replaceAll("-"," có nghĩa là ")
                liEle = document.createElement("li")
                liEle.innerText = Strsplit
                liEle.addEventListener("click",(e)=>{
                    if(e.target.classList.value == ""){
                        e.target.classList.value += "hightlight"
                    }
                    else{
                        e.target.classList.remove("hightlight")
                    }
                })
                table.appendChild(liEle)  
            }
        }
})








