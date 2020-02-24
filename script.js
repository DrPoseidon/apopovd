const skillsBtn = document.querySelector(".skills_btn");
const contactsBtn = document.querySelector(".contacts_btn");
const informationCont = document.querySelector(".information_cont");

skillsBtn.addEventListener("click",sBtn);
contactsBtn.addEventListener("click",cBtn);

function sBtn(){
    informationCont.textContent=""
    informationCont.insertAdjacentHTML("afterbegin",
    `
    <div class="new_div">
    C++
    <br>
    Python
    <br>
    HTML,CSS,JS
    </div>
    `
    )
}

function cBtn(){
informationCont.textContent=""
    informationCont.insertAdjacentHTML("afterbegin",
    `
    <div class="new_div">
    <h1>+7(904)690-13-10<h1>
    <br>
    <a href="https://vk.com/dr_poseidon" target="_blank"><img src="img/vk.png" class="vk"></a>
    <br>
    <a href="https://www.instagram.com/dr.poseidon/" target="_blank"><img src="img/inst.png" class="inst"></a>
    <br>
    <a href="mailto:a.popov.d@gmail.com"><img src="img/gmail.png" class="gmail"></a>
    </div>
    `
    )
}