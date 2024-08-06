/* Variables */
let btnContainer = document.getElementById('btn-container');
let account = document.getElementById("account");
let info = document.getElementById("info");
let message = document.getElementById("message");
let call = document.getElementById("call");
btnContainerFlag = false;


/* Event */
btnContainer.addEventListener("click" , ()=>{
    if(btnContainerFlag === false){
        btnContainer.style.transform = "rotate(-45deg)";
        btnContainerFlag = true;
        account.style.left = "8rem";
        account.style.top = "1rem";
        info.style.left = "8rem";
        info.style.top = "5rem";
        message.style.left = "5rem";
        message.style.top = "8rem";
        call.style.left = "1rem";
        call.style.top = "8rem";
    } else {
        btnContainer.style.transform = "rotate(0deg)";
        btnContainerFlag = false;
        account.style.left = "2rem";
        info.style.left = "2rem";
        info.style.top = "2rem";
        message.style.left = "2rem";
        message.style.top = "2rem";
        call.style.left = "2rem";
        call.style.top = "2rem";
    }
    
})