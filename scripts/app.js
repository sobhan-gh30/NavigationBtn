/* Variables */
let btnContainer , account, info, message, call, btnContainerFlag , container
container = document.querySelector(".container")
btnContainer = document.getElementById('btn-container');
account = document.getElementById("account");
info = document.getElementById("info");
message = document.getElementById("message");
call = document.getElementById("call");
btnContainerFlag = false;

/* Event */
btnContainer.addEventListener("click", () => {
    // Toggle rotation class for button
    btnContainer.classList.toggle("active-rotate");
    // Toggle position class for elements
    container.classList.toggle("active-position");

});