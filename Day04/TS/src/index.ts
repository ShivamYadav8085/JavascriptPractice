let employee:[number, string, boolean]

let employees:[number, string, boolean][]=[]

const addEmployeeWithDefaultValueFalse=(id:number,name:string,isPermanent:boolean=false)=>{
    employee=[id,name,isPermanent]
    employees.push(employee)
}
const updateEmployee=(id:number,isPermanent?:boolean)=>{
    const employee = employees.find(employee=>employee[0]===id)
    if (employee) {
        if(isPermanent!==undefined){
            employee[2]=isPermanent;
            console.log(`Employee with id ${id} updated`);
        }else{
            console.log(`employee with id ${id} not updated`);
        }
    }else{
        console.log(`We don't have data of employee with id ${id}`);
        
    }
}

addEmployeeWithDefaultValueFalse(1,"shiv")
addEmployeeWithDefaultValueFalse(2,"aryn",true)
addEmployeeWithDefaultValueFalse(3,"srb",false)
addEmployeeWithDefaultValueFalse(4,"amn",true)
addEmployeeWithDefaultValueFalse(5,"rkt")
console.log("Employees data after Adding with default value");

console.log(employees);

updateEmployee(1,true)
updateEmployee(2)

console.log(employees);

const typeAssertionExample=()=>{
    let stringIdEmps = employees.map(e=>[(e[0]) as any as String,e[1],e[2]])
    stringIdEmps.push(["6","srb",true]);
    console.log(stringIdEmps);
    
}

typeAssertionExample();