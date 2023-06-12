function performDivision(num1, num2){
    if(typeof num1==='string'|| typeof num2==='string'){
        throw new Error("Argument should be number");
    }else{
        if (num2===0) {
            throw new Error("please enter valid denominator")
        }else{
            console.log(num1+num2);
        }
    }
}

function main(){
    try{
performDivision(1,2);
    }catch(err){
        console.log(err);
    }
    try{
performDivision(1,0);
    }catch(err){
        console.log(err);
    }
    try{
performDivision(1,"m");
    }catch(err){
        console.log(err);
    }

    
}
main();