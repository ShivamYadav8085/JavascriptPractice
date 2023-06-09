function decimalToBinary(decimalNumber){
    let num = parseInt(decimalNumber);
    let str="";
    while (num>0) {
        str+= parseInt(num%2);
        num=parseInt(num/2);
    }
    console.log(str.split("").reverse().join(""));
}
decimalToBinary(16);