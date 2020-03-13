const readline = require(`readline`);
const students = import('.\student.js');


 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question(`please enter your name :`,(x)=>{
    r1.question (`please enter your matric no :`,(y) =>{
        rl.question (`please enter your major :`,(z) =>{

            let stud = new student(x,y,z);
            console.log (stud);




            });




        });

rl.close();

});




