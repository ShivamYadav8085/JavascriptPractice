
const div = document.querySelector("#container") as HTMLDivElement
const todos:HTMLParagraphElement[] =[]
const add=()=>{
    const todoText = document.getElementById("todo") as HTMLInputElement;
    const value:string = todoText.value;
    if(value===""){
        alert("please enter valid todo")
    }else{
        const todoDiv = document.createElement("div") as HTMLDivElement
        const todoText = document.createElement("p") as HTMLParagraphElement
        const deleteTodo = document.createElement("span") as HTMLSpanElement

        todoText.innerText= value; 
        deleteTodo.innerText= `X`;

        todoText.style.display="inline"
        todoText.style.marginRight="20px"

        deleteTodo.style.cursor="pointer"

        todoDiv.append(todoText,deleteTodo)

        deleteTodo.addEventListener("click",event=>{
            const target = event.target as HTMLSpanElement
            target.parentElement?.remove();
        })

        todoText.addEventListener("click",event=>{
            const target = event.target as HTMLParagraphElement
            target.style.textDecoration='line-through'
        })
        div.append(todoDiv)
    }
}