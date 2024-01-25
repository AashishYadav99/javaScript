
// hoisting => it is a behavious in which we can use function and varaiable  before declaration
// but it possible on we use var key word
// its not possible in case of let and const
//let and  const are hostied but they can not accessed  before declaration 

//console.log(fname);
var fname="Ashish kumar yadav";


var fname;
//console.log(fname);
var fname="Ashish kumar yadav";

// function can be called berfore the declaration

name()
function name(){
    //console.log("ashish yadav");
}

//but in the case of function we get an error

// name1()
// var fn = function name1() {
//     //console.log("hello World!");
// }

// arrow function

lname()
var lname1=()=>{
    console.log("hello world!");
}

//conclusion =>  JavaScript doesnot hoist the function expression and arrow functions