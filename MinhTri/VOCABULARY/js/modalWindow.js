



const HTMLstr = '<div class="modal_over"><div class="modal_containtner"><div class="modal_titlebar"><h3 class="modal_title">Title here</h3><button id="btn_close"><i class="fa-solid fa-xmark"></i></button></div><div class="modal_content"><p id="content">Sample</p></div></div></div>'
const HTMLStr_WB_Input_newList = '<div class="modal_over"><div class="modal_containtner"><div class="modal_titlebar"><h3 class="modal_title">Title here</h3><button id="btn_close"><i class="fa-solid fa-xmark"></i></button></div><div class="modal_content"><input id="content" value=""/><button id="btn-done">Done</button></div></div></div>'
const HTMLStr_WB_Input_AddNewWord = '<div class="modal_over"><div class="modal_containtner"><div class="modal_titlebar"><h3 class="modal_title">Title here</h3><button id="btn_close"><i class="fa-solid fa-xmark"></i></button></div><div class="modal_content"> <input id="input_newWord" value="Enter new word"/> <input id="input_mean" value="Enter mean"/>   <button id="btn-done">Done</button></div></div></div>'
// WINDOW MODAL BASE CODE
function windowModal(title, text) {
    const over = document.getElementsByTagName("container");
    const perOver = JSON.parse(JSON.stringify(over[0].innerHTML))
    over[0].innerHTML += HTMLstr;
    const titleEle = document.getElementsByClassName("modal_title")[0].innerText = title;
    const contentEle = document.getElementById("content").innerText = text;
    function closeModal() {
        over[0].innerHTML = preOver
        document.getElementById("btn_close").addEventListener("click", closeModal)
        document.getElementsByTagName("body")[0].addEventListener("click", closeModal)
    }
}

// WHEN CLICK NEW LIST BUTTON
function windowModalInput_newList(title) {
    console.log(document.getElementsByClassName("modal_over")[0]);
    const over = document.getElementsByClassName("container");
    preOver = JSON.parse(JSON.stringify(over[0].innerHTML))
    over[0].innerHTML += HTMLStr_WB_Input_newList;
    const titleEle = document.getElementsByClassName("modal_title")[0].innerText = title;
    const InputEle = document.getElementById("content").innerText

    document.getElementById("btn-done").addEventListener("click", () => {
        const inputEle = document.getElementById("content");
        localStorage.setItem(inputEle.value, "topic")
        over[0].innerHTML = preOver;
    })
    document.getElementById("btn_close").addEventListener("click", () => {
        over[0].innerHTML = preOver;
    })
}
document.getElementById("btn-newList").addEventListener("click", () => {
    windowModalInput_newList("Topic name:")
})

// WHEN CLICK BUTTON "ADD NEW WORD"

{/* <div class="ContainerDropDownlist">
            <button class="btn-dropDownList">sample</button>
            <button class="btn-dropDownList">sample</button>
            <button class="btn-dropDownList">sample</button>
            <button class="btn-dropDownList">sample</button>
            <button class="btn-dropDownList">sample</button>  
        </div> */}


function addNewWord() {
    HTMLstr_ContainerDropDownList = '<div class="overScreen"><div class="ContainerDropDownlist"> @ </div></div>'
    str = ""
    for (i = 0; i < localStorage.length; i++) {
        let strChange = '<button class="btn-dropDownList">sample</button>'
        console.log(localStorage.key(i))
        strChange = strChange.replace("sample", localStorage.key(i))
        str += strChange
    }
    HTMLstr_ContainerDropDownList = HTMLstr_ContainerDropDownList.replace("@", str)
    tagetEle = document.getElementById("Container_dropDown")
    copyTaget = JSON.parse(JSON.stringify(tagetEle.innerHTML))
    tagetEle.innerHTML = HTMLstr_ContainerDropDownList
    console.log(tagetEle.innerHTML);
    document.getElementsByClassName("overScreen")[0].addEventListener("click",()=>{
        tagetEle.innerHTML = copyTaget
    })

    // CHOOSE TOPIC BUTTON 
    function clickBtnTopic(){
              
    }

    // document.getElementsByClassName("btn-dropDownList")
    for(i of document.getElementsByClassName("btn-dropDownList")){
        i.addEventListener("click",clickBtnTopic)
    }


}
document.getElementById("btn-add").addEventListener("click", addNewWord)






