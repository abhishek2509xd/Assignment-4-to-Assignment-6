const r1 = require("readline-sync");
const person = {};
person.name = r1.question("What is your name:");
person.phone = r1.question("What is your phone:");
person.email = r1.question("What is your email:");
person.basicSalary = r1.question("What is your basic Salary:");
console.log(person);
