const skillsBtn = document.querySelector(".skills_btn");
const contactsBtn = document.querySelector(".contacts_btn");
const newDiv1 = document.querySelector(".new_div1");
const newDiv = document.querySelector(".new_div");
const informationCont = document.querySelector(".information_cont")

newDiv1.style.display = "none";
newDiv.style.display = "none";

skillsBtn.addEventListener("click",sBtn);
contactsBtn.addEventListener("click",cBtn);

function sBtn(){
    if(newDiv.style.display =="none") newDiv.style.display = "block";
    else newDiv.style.display = "none"

    
}

function cBtn(){
    if(newDiv1.style.display =="none") newDiv1.style.display = "block";
    else newDiv1.style.display = "none"
}