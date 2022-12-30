console.log("Hello, i am index.js");

const toggler = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
let toggleOn = true;

toggler.addEventListener("click", (e)=>{

    if(toggleOn){
        let sideBar = document.querySelector(".sidebar");
        sideBar.style.transition = "all 0.3s";
        sideBar.style.transform = "translateX(0px)";
        open.style.display = "none";
        close.style.display = "flex";
        toggleOn = false
    }
    else{
        let sideBar = document.querySelector(".sidebar");
        sideBar.style.transition = "all 0.3s";
        sideBar.style.transform = "translateX(100%)";
        open.style.display = "flex";
        close.style.display = "none";
        toggleOn = true;
    }
    
})
