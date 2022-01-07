const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit',e =>{
    e.preventDefault();
    formValidation();
});

const errorMessage = (element,message) => {
    const forminput = element.parentElement;
    const errorMsg = forminput.querySelector('small');
    forminput.classList.add('error');
    forminput.classList.remove('success');
    errorMsg.innerText = message;
}
const validMessage = (element) => {
    const forminput = element.parentElement;
    const errorMsg = forminput.querySelector('small');
    errorMsg.innerText = '';
    forminput.classList.remove('error');
    forminput.classList.add('success');
}
function isEmail(email) {
    return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
}
function isPassword(password1){
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password1);
}
// Form Validating
const formValidation = _ => {
    let check = 0;
    let Name = username.value.trim();
    let mailId = email.value.trim();
    let psd1 = password1.value.trim();
    let psd2 = password2.value.trim();
    // If condition for Name Validation
    if(Name===''){
        errorMessage(username,"Username Required");
    }else if(Name.length < 10){
        errorMessage(username,'Minimum ten Characters');
    }else {
        validMessage(username);
        
        check = check+1;
    }
    // If condition for Email  Validation
    if(mailId ===''){
        errorMessage(email,"Email Required");
    } else if(!isEmail(mailId)){
        errorMessage(email,'Please enter a Valid email-id');
    }else {
        validMessage(email);
        
        check= check+1;
    }
    // If condition for Password-one Validation

    if(psd1===''){
        errorMessage(password1,'Password required');
    }else if(!isPassword(psd1)){
        errorMessage(password1,'Minimum eight characters, at least one letter, one number and one special character');
    }else {
        validMessage(password1);
        
        check= check+1;
    }
    // If condition for Password-one Validation
    if(psd2===""){
        errorMessage(password2,'password required');
    }
    else if(psd1!==psd2){
        errorMessage(password2,'passwords are must be same');
    }
    else{
        validMessage(password2);
        
        check= check+1;
    }
    if(check === 4){
        console.log(Name);
        console.log(mailId);
        console.log(psd1);
        console.log(psd2);
        username.value='';
        email.value = '';
        password1.value = '';
        password2.value = '';

    }
    

    
    
}
