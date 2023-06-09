function eligibilityForVote(){
    let age = prompt();
    if(age>=18)
    console.log("Congratulations! You are eligible for voting");
    else
    console.log("Sorry You are not eligible");
}

eligibilityForVote();