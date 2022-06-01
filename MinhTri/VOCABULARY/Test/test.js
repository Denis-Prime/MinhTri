
let Arraya =[] 
page  = {
    innerhtml: "",
    ans:"",
    ques:"",
    userAns: "",
}

let strlocal  = ""
let strlocalARR   = JSON.parse(JSON.stringify({...localStorage.getItem("VobArr")})) 
for(i in strlocalARR){
    strlocal +=strlocalARR[i]
}

let count = 0
for(i = 0;i<strlocal.length;i++){if(strlocal[i]=="|")count+=1;}
    console.log(count);
    let quesEle = document.querySelector(".ques span") 
    let checkBtn = document.querySelector('.check')
    let trueDiv = document.getElementsByClassName('ketqua')[0]
    let falseDiv = document.getElementsByClassName('ketqua')[1]
    const ans = document.querySelector('.anser-in')
    for(let i = 0;i<count;i++){
        let indexSplit = strlocal.indexOf("|")
        console.log((indexSplit));
        let strSlice = strlocal.slice(0,indexSplit+1)
        strlocal =  strlocal.replace(strSlice,"")
        console.log(strSlice);
        console.log(strlocal);
        const english = strSlice.substring(0,strSlice.indexOf("-"))
        strSlice =  strSlice.replace(english+"-","")
        strSlice =  strSlice.replace("|","")
        let vn = strSlice
        console.log("eng    "+english);
        console.log("vie   "+vn);
        quesEle.innerHTML = english

        checkBtn.addEventListener("click",()=>{
            if(ans.value == vn){
                falseDiv.classList.remove("fontRed")
                trueDiv.setAttribute("class","fontGreen")
            }
            else{
                trueDiv.classList.remove("fontGreen")
                falseDiv.setAttribute("class","fontRed")
            }
        })
        let NEWpage = new Object();
        NEWpage.innerhtml = JSON.stringify( document.getElementsByClassName("main-content")[0].innerHTML)
        NEWpage.ques = english
        NEWpage.ans = vn
        Arraya.push(NEWpage)
        
}


let nowindex = 0

function Testing(index) {
    console.log(index);
    const MainContent = document.getElementsByClassName("main-content")[0]
    MainContent.innerHTML = JSON.parse(Arraya[index].innerhtml)
    let quesEle = document.querySelector(".ques span") 
    let checkBtn = document.querySelector('.check')
    let trueDiv = document.getElementsByClassName('ketqua')[0]
    let falseDiv = document.getElementsByClassName('ketqua')[1]
    const ans = document.querySelector('.anser-in')
    if(Arraya[index].userAns != undefined) {
        ans.value = Arraya[index].userAns
    }

    checkBtn.addEventListener("click",()=>{

        if(ans.value == Arraya[index].ans){
            falseDiv.classList.remove("fontRed")
            trueDiv.setAttribute("class","fontGreen")
        }
        else{
            trueDiv.classList.remove("fontGreen")
            falseDiv.setAttribute("class","fontRed")
        }
        console.log(ans.value);
        Arraya[index].userAns = ans.value
        ans.removeAttribute("placeholder")
        Arraya[index].innerhtml = JSON.stringify(MainContent.innerHTML)
    })
    
    const nextBtn = document.getElementById("next")
    const preBtn = document.getElementById("pre")

    nextBtn.addEventListener("click",()=>{
        if( index < count-1){
            console.log("run");
            Testing(nowindex+1)
            nowindex+=1
        }
        else{
            alert("You have completed the test!!")
        }
    })
    preBtn.addEventListener("click",()=>{
        if(index > 0){
            console.log("RUN PRE");
            Testing(nowindex-1)
            nowindex-=1
        }
    })
}

console.log(Arraya[4]);
Testing(nowindex)
