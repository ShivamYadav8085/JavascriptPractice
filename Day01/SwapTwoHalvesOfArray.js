function swapTwoHalvesOfArr(arr){
    let lengthOfArray = arr.length
    if(lengthOfArray%2!==0){
        console.log("Array length is not even");
    }else{
        let firstHalveIndex=0,lastHalveIndex=lengthOfArray/2;
        while(firstHalveIndex<lengthOfArray/2){
            let temp = arr[firstHalveIndex];
            arr[firstHalveIndex]=arr[lastHalveIndex];
            arr[lastHalveIndex]=temp;
            firstHalveIndex++;
            lastHalveIndex++;
        }
        console.log(arr);
    }
}

swapTwoHalvesOfArr([1,2,3,4,5,6])