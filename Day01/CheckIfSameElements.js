function checkIfSameElements(firstArr, secondArr){
    let firstArrayLength = firstArr.length;
    let secondArrayLength = secondArr.length;
    if (firstArrayLength!==secondArrayLength) {
        console.log("Please give valid input");
    }else{
        firstArr.sort(function(a,b){
            return a-b;
        })
        secondArr.sort(function(a,b){
            return a-b;
        })
        let index=0;
        for (; index < firstArr.length; index++) {
            if(firstArr[index]!==secondArr[index])         
            break;   
        }
        if (index===firstArrayLength) {
            console.log("same");
        }else{
            console.log("not same");
        }
    }
}
checkIfSameElements([1,2,3,4,5],[5,4,1,2,3])