let error1= document.getElementById("error1");
let error2= document.getElementById("error2");
let submitPara= document.getElementById("submitPara");
let submit= document.getElementById("submit");

let email=document.getElementById("email");
let password=document.getElementById("password");

const emailchange=()=>{
    if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        error1.style.display="block";
    }
    else{
        error1.style.display="none";

    }
}
const passwordChange=()=>{
    if( !password.value.match(/^.{8,}$/)){
        error2.style.display="block";
    }
    else{
        error2.style.display="none";
    }
}
const onSubmit=(event)=>{
    event.preventDefault();
    if(email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && password.value.match(/^.{8,}$/)){
        error1.style.display="none";
        error2.style.display="none";
        submitPara.style.display="block";
    }
    else{
        error1.style.display="block";
        error2.style.display="block";
        submitPara.style.display="none";
    }

}
submit.addEventListener("click",onSubmit)
