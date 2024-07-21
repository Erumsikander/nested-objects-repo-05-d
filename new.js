"use strict";
// Nested Objects..!
let teacher = {
    name: "Erum Sikander",
    age: 26,
    manager: true,
    salary: // Nested Object
    {
        basic: 50.000,
        monthly: 80.000,
        bones: 50.0000
    }
};
console.log(teacher.name);
console.log(teacher.salary.basic + teacher.salary.monthly + teacher.salary.bones);
