const firstInput = document.getElementById("firstNumber");
const secondInput = document.getElementById("secondNumber");

const sumBtn = document.getElementById("sum");
const clearBtn = document.getElementById("clear")

const output =document.getElementById("output");

let firstNum,secondNum;

output.style.backgroundColor="Red"
output.style.color="white"

function sum() {
    output.innerText= firstNum+secondNum;
}

firstInput.addEventListener("change",e=>{
    firstNum = parseInt(e.target.value)
})

secondInput.addEventListener("change",e=>{
    secondNum = parseInt(e.target.value)
})

sumBtn.addEventListener("click",sum)

output.addEventListener("mouseover",e=>{
    output.style.backgroundColor="Red"

})
output.addEventListener("mouseout",e=>{
    output.style.backgroundColor="white"
})

clearBtn.addEventListener("click",()=>{
    sumBtn.removeEventListener("click",sum)
})