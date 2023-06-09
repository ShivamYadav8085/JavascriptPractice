function maxDifferenceBetweenTwoAdjacentElement(arr) {
    if (arr.length<5) {
        console.log("Minimum 5 elements required");
    }else{
        let maxDiff= 0;
        for (let index = 1; index < arr.length; index++) {
            let diff = Math.abs(arr[index]-arr[index-1]);
            maxDiff = diff>maxDiff? diff: maxDiff;  
        }
        console.log(maxDiff);
    }
}

maxDifferenceBetweenTwoAdjacentElement([1,2,3,9,10]);