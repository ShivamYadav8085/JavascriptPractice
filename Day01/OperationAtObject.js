function operations(myObject) {
    console.log(Object.keys(myObject))
    console.log(Object.values(myObject))
    console.log(Object.keys(myObject).length)
}
const student = {
    name:"John",
    rollNo: 10
}

operations(student)