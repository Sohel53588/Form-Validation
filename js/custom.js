var fname = document.getElementById('fname')
var fname_err = document.getElementById('fname_err')

var mail = document.getElementById('mail')
var mail_err = document.getElementById('mail_err')
var mail_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


var pass = document.getElementById('pass')
var pass_err = document.getElementById('pass_err')
var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

var cpass = document.getElementById('cpass')
var cpass_err = document.getElementById('cpass_err')


function sub() {
    if(fname.value == ''){
        fname_err.innerHTML = "Please enter your Name"
        fname.style.border = "1px solid red"
        fname.focus()
        return false
    }

    else if(mail.value == ''){
        mail_err.innerHTML = "Please enter your Email"
        mail.style.border = "1px solid red"
        mail.focus()
        return false
    }
    else if(!mail_regex.test(mail.value)){
        mail_err.innerHTML = "Please enter your Valid Email"
        mail.style.border = "1px solid red"
        mail.focus()
        return false
    }


    else if(pass.value == ''){
        pass_err.innerHTML = "Please enter your password"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }


    else if(!regularExpression.test(pass.value)){
        pass_err.innerHTML = "Please enter minimum 6 degit number and special Character"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }

    else if(cpass.value != pass.value){
        cpass_err.innerHTML = "Your password Wrong"
        cpass.style.border = "1px solid red"
        cpass.focus()
        return false
    }
}


function passshow(){
    var i = document.getElementById('pass')
    if(i.type == 'password'){
        i.type = 'text'
    }
    else{
        i.type ='password'
    }

}

function valid(){
    if(fname.value != ''){
        fname_err.innerHTML = ""
        fname.style.border = "2px solid green"
    }

     if(mail.value != ''){
        mail_err.innerHTML = ""
        mail.style.border = "2px solid green"
    }

    if(pass.value != ''){
        pass_err.innerHTML = ""
        pass.style.border = "2px solid green"
    }
}

fname.addEventListener('blur',valid)
mail.addEventListener('blur',valid)
pass.addEventListener('blur',valid)