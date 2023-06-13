"use strict";

var _marks = _interopRequireDefault(require("./marks"));
var _student = _interopRequireDefault(require("./student"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const resultPercentage = arrayOfStudents => {
  return arrayOfStudents.map(student => {
    student.calcTotalMarks();
    const mps = student.marks.length;
    return student.totalMarks / mps;
  });
};
const studentWithDistinction = arrayOfStudents => {
  return arrayOfStudents.filter(student => {
    student.calcTotalMarks();
    return student.totalMarks >= 200;
  });
};
const studentDetails = (students, rollNo) => {
  const student = students.find(student => {
    student.calcTotalMarks();
    return student.rollNo === rollNo;
  });
  console.log(`${student.rollNo}   ${student.firstName} ${student.lastName}    ${student.totalMarks}`);
};
const student1 = new _student.default("18", "Shivam", "Yadav");
const student1MarksInScience = new _marks.default("Science", 40);
const student1MarksInMaths = new _marks.default("Maths", 50);
const student1MarksInSocial = new _marks.default("Social", 60);
student1.marks = [student1MarksInMaths, student1MarksInScience, student1MarksInSocial];
const student2 = new _student.default("01", "Aryan", "Pal");
const student2MarksInScience = new _marks.default("Science", 90);
const student2MarksInMaths = new _marks.default("Maths", 80);
const student2MarksInSocial = new _marks.default("Social", 50);
student2.marks = [student2MarksInMaths, student2MarksInScience, student2MarksInSocial];
const student3 = new _student.default("16", "Saurabh", "Kushwaha");
const student3MarksInScience = new _marks.default("Science", 40);
const student3MarksInMaths = new _marks.default("Maths", 50);
const student3MarksInSocial = new _marks.default("Social", 60);
student3.marks = [student3MarksInMaths, student3MarksInScience, student3MarksInSocial];
const allStudents = [student1, student2, student3];
const percentagesOfAllStudents = resultPercentage(allStudents);
console.log(percentagesOfAllStudents);
const totalStudentsWithDistinction = studentWithDistinction(allStudents).length;
console.log(`Total Student with distinction ${totalStudentsWithDistinction}`);
studentDetails(allStudents, "18");