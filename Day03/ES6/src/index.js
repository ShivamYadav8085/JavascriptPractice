import Marks from "./marks"
import Student from "./student";

const resultPercentage = (arrayOfStudents)=>{
    const mps = arrayOfStudents.length;
    return arrayOfStudents.map(student=>{
        student.calcTotalMarks();
        return (student.totalMarks / mps);
    })
}

const studentWithDistinction=(arrayOfStudents)=>{
    return arrayOfStudents.filter(student=>{
        student.calcTotalMarks();
        return student.totalMarks >=200;
    })
}

const studentDetails = (students,rollNo)=>{
    const student = students.find(student=>{
        student.calcTotalMarks();
        return student.rollNo===rollNo
    })
    console.log(`${student.rollNo}   ${student.firstName} ${student.lastName}    ${student.totalMarks}`);
}

const student1 = new Student("18","Shivam","Yadav")


const student1MarksInScience = new Marks("Science",40)
const student1MarksInMaths = new Marks("Maths",50)
const student1MarksInSocial = new Marks("Social",60)

student1.marks = [student1MarksInMaths, student1MarksInScience, student1MarksInSocial];

const student2 = new Student("01","Aryan","Pal")


const student2MarksInScience = new Marks("Science",90)
const student2MarksInMaths = new Marks("Maths",80)
const student2MarksInSocial = new Marks("Social",50)

student2.marks = [student2MarksInMaths, student2MarksInScience, student2MarksInSocial];

const student3 = new Student("16","Saurabh","Kushwaha")


const student3MarksInScience = new Marks("Science",40)
const student3MarksInMaths = new Marks("Maths",50)
const student3MarksInSocial = new Marks("Social",60)

student3.marks = [student3MarksInMaths, student3MarksInScience, student3MarksInSocial];

const allStudents = [student1,student2,student3];

const percentagesOfAllStudents = resultPercentage(allStudents)

console.log(percentagesOfAllStudents);

const totalStudentsWithDistinction = studentWithDistinction(allStudents).length;

console.log(`Total Student with distinction ${totalStudentsWithDistinction}`);

studentDetails(allStudents,"18")