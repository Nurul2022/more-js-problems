/*
let sum = 0;
for (let i = 0; i <=3; i++) {
    
    sum = sum + i;
}
  console.log(sum);
*/

var student = {
    name: "Yo Mama",
    age: 16,
    
};

// Deleting a property completely
delete student.age;
console.log(student.age);  // Prints: undefined
console.log(student);  // Prints: {name: "Yo Mama"}
