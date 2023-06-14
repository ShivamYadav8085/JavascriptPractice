const myForm = document.forms.myForm;


const resetBtn = myForm.resetfm;
const name = myForm.name;
const email = myForm.email;
const mobile = myForm.mobile;
const gender = myForm.gender;
const hobbies = myForm.hobby;

const checkForEmptyField = ()=>{

    if(name.value===""){
        alert("Name can not be empty")
        return false;
    }
    if(email.value===""){
        alert("Email can not be empty")
        return false;
    }
    if(mobile.value==="")
    {
        alert("Mobile can not be empty")
        return false;
    }
    if(gender.value===""){
        alert("Please select your gender")
        return false
    }
    
    return true;
}

const validate = ()=>{
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const mobileReg = /^[6-9]\d{9}$/;
    if(!checkForEmptyField()){
        return false;
    }
    if(!emailReg.test(email.value)){
        alert("Please enter valid Email")
        return false;
    }
    if(!mobileReg.test(mobile.value)){
        alert("Please enter valid mobile number")
        return false;
    }
    if(gender[1].checked){
        if(!hobbies[0].checked && !hobbies[1].checked && !hobbies[2].checked){
            alert("please select one hobby")
            return false;
        }
    }
    return true;

}

const resetForm = ()=>{
    myForm.reset();
}

resetBtn.addEventListener("click",()=>{
    resetForm();
})