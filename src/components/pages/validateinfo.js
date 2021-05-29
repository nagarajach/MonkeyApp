import React from 'react'

const  validateinfo = (values) => {
    let errors = {}

    if(!values.name){
        errors.name = "Full Name required";
    }

    if(!values.email.trim()){
        errors.email = "Email required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email Address is invalid";
    }

    if(!values.password){
        errors.password=" Password is required";
    } else if(values.password.length < 6) {
        errors.password = "Password needs to be 6 charachers or more";
    }

    if(!values.password2) {
        errors.password2 = "Password is required";
    } else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match";
    }
  
    return errors;
}

export default validateinfo;
