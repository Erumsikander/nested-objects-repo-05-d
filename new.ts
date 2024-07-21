
// Nested Objects..!


type Newteacher =
{
    name : string,
    age : number,
    manager : boolean,
    salary :    // nested object
    {
        basic : number,
        monthly : number,
        bones : number
    } 
}

let teacher : Newteacher = 
{
    name : "Erum Sikander",
    age : 26,
    manager : true,
    salary :    // Nested Object
    {
        basic : 50.000,
        monthly : 80.000,
        bones : 50.0000
    }
}
 console.log(teacher.name);
 console.log(teacher.salary.basic + teacher.salary.monthly + teacher.salary.bones);