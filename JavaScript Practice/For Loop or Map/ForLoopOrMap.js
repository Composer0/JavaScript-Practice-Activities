// map, filer and reduce - O/P Based Questions
// Question 1 - Return the names of students in Uppercase along with their grade.
const box = document.querySelector('.box');


let students = [
    {name: "Orion", rollNumber: 31, grade: 94},
    {name: "Nann", rollNumber: 28, grade: 98},
    {name: "Scott", rollNumber: 38, grade: 82},
    {name: "Ashley", rollNumber: 1, grade: 100}
];




// Using A For Loop To Solve.
// let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
//     names.push(students[i].grade);
// }
// End of For Loop Example


// Using A Map To Solve.

const names = students.map((textDontMatter => textDontMatter.name.toUpperCase()));
const grades = students.map((textDontMatter2 => textDontMatter2.grade));

// End Of Using A Map To Solve.

// console.log(names, grades);

box.addEventListener('click', (e) => {
    window.alert("These People:" + names+ "Have These Grades..." + grades);
})