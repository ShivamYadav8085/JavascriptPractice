class Student{
    constructor(rollNo, firstName, lastName,marks){
        this.rollNo = rollNo
        this.firstName = firstName
        this.lastName =lastName
        this.totalMarks=0;
        this.marks =marks;
    }
    calcTotalMarks(){
        let l =0;
        this.marks.forEach(mark => {
            l+= mark.value;
        });
        this.totalMarks =l;
    }

    set setMarks(marks){
        this.marks = marks;
    }
}

export default Student;