function calculator(num1,num2,operation){
    switch (operation) {
        case "+":
            console.log(`Addition of ${num1} & ${num2} is ${num1+num2}`);
            break;
        case "-":
            console.log(`Substraction of ${num1} & ${num2} is ${num1-num2}`);
            break;
        case "*":
            console.log(`Mulplication of ${num1} & ${num2} is ${num1*num2}`);
            break;
        case "/":
            console.log(`Division ${num1} & ${num2} is ${num1/num2}`);
            break;
    
        default:
            console.log(`Please give valid arguments`);
            break;
    }
}

calculator(4,2,'*')