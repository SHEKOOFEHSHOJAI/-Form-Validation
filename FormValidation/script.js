
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailerror = document.getElementById("email-error");
let messageError = document.getElementById("message-error");


function valudate(){
  let contectName = document.getElementById("contect-name").value;
console.log(contectName);
  if (contectName.length === 0) {
    nameError.innerHTML = "Name is requird";
    return false;
  }
  if (!contectName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  let valid=nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  
  return true
  
}
valudate();
// contectName.addEventListener("keyup",()=>{


// if (contectName.length === 0) {
//   nameError.innerHTML = "Name is requird";
//   return false;
// }
// if (!contectName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//   nameError.innerHTML = "write full name";
//   return false;
// }
// nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
// return true

// })



// phone number

function valudatephone(){
    let contectphone = document.getElementById("contect-phone").value;
    if (contectphone.length==0) {

    phoneError.innerHTML = "phone no required";
     return false
    }
    if(contectphone.length!==10){
        phoneError.innerHTML = "phone no should be 10 digits";
        return false 
    }
    if (!contectphone.match(/^[0-9]{10}$/)) {
      phoneError.innerHTML = "only digit please";
      return false;
    }
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true

}
valudatephone();

// Email valudation
function valudateEmail() {
     let contectEmil = document.getElementById("contect-Emil").value;
     console.log(contectEmil);
     if (contectEmil.length == 0) {
       emailerror.textContent = "Email no required";
       return false;
     }

      if (
        !contectEmil.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.]{a-z}{2,4}$/)
      ) {
        emailerror.innerHTML = "email invalid";
        return false;
      }
      emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
}
valudateEmail();

// messege
function valudatemssg() {
    let contectMessg = document.getElementById("contect-messg").value;
    let requird=30;
  
    let left = requird - contectMessg.length;
    if(left>0){
      messageError.innerHTML = left + "more characters required";  
      return false
    }
     messageError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
     return true;
}


// form

let submiterror = document.getElementById("submit-error");
function valudationForm() {
   submiterror.style.display='block'
    if (!valudate || !valudatephone() || !valudateEmail() || valudatemssg()) {
     submiterror.innerHTML='please fix error to submit'
    
    setTimeout(() => {
         submiterror.style.display = "none";
    },3000);
     return false
   
   
   
    }
}