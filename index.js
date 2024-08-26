const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input"); 

// const copyIconEl = document.querySelector(".icon");
const  alertContaianerEl = document.querySelector(".alert-container")
btnEl.addEventListener("click",()=>{
    createPassword();
});

copyIconEl.addEventListener("click", ()=> {
    copyPassword();
    alertContaianerEl.classList.remove("active");
    
});

function createPassword(){
    const chars=
        "TARUNVARSHNEYGLAUniversity21122003/*-++";
    const passwordLength = 15;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }
    inputEl.value = password;
    // alertContaianerEl.innerText = password + " COPIED!"
}

function copyPassword(){
    inputEl.ariaSelected();
    inputEl.seySelectionRange(0,9999)
    navigator.clipboard.writeText(inputEl.value); 
    alertContaianerEl.innerText = password + " COPIED!"

    
}