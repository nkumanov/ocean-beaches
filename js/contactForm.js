
//define contact button
let contactBtn=document.getElementById("contactBtn");

    contactBtn.addEventListener("click" , function(e){
    e.preventDefault();
    //define fields for the name of the user
    let userName=document.getElementById("userName");
    let errorName=document.getElementById("nameErr");
    // define fields for the email of the user
    let userEmail=document.getElementById("userEmail");
    let errorEmail=document.getElementById("emailErr");
    // define fields for the number of the user
    let phoneNumber = document.getElementById("phoneNumber");
    let errorPhone=document.getElementById("phoneErr");

    // checking if everything is ok
    let nameErr=emailErr=phoneErr=true;


    // validate user name
    if(userName.value == "") {
        errorName.innerHTML="<p>Please enter valid name.</p>"
    } else {
        var regex =/^[a-zA-Z\s]+$/;                
        if(regex.test(userName.value) === false) {
            errorName.innerHTML="<p>Please enter name longer than 2 characters."
        } else {
            errorName.innerHTML=""
            nameErr = false;
        }
    }


    // validate email of user
    if(userEmail.value == "") {
        errorEmail.innerHTML="<p>Please enter valid email.</p>"
    } else {
        var regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;                
        if(regex.test(userEmail.value) === false) {
            errorEmail.innerHTML="<p>Please enter vaid email address."
        } else {
            errorEmail.innerHTML=""
            emailErr = false;
        }
    }
    
    // validate phone of user
    if(phoneNumber.value == "") {
        errorPhone.innerHTML="<p>Please enter valid phone number.</p>"
    } else {
        var regex = /^\d{10}$/;
        if(regex.test(phoneNumber.value) === false) {
            errorPhone.innerHTML="<p>Please enter valid number 10 digits long.</p>"
        } else{
            errorPhone.innerHTML=""
            phoneErr = false;
        }
    }
    
    // proceed if everything is ok
    if((nameErr || emailErr || phoneErr) == true){
        return false;
    }else{
        document.querySelector("form").reset();
    }
        
})