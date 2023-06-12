const parent = document.getElementById("parent")
const child1 = document.getElementById("child1")
const child2 = document.getElementById("child2")

parent.addEventListener("click",()=>{
parent.style.backgroundColor="white"
})
child1.addEventListener("click",()=>{
child1.style.backgroundColor="blue"
})
child2.addEventListener("click",(e)=>{
e.stopPropagation();
child2.style.backgroundColor="pink"
})