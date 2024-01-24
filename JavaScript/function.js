// function is used for execute the group of statement muiltiple times

function f1(){
    console.log("it's function");
    return "Hello Ashish"
}
f1()

function sum(n1,n2) {
    console.log(n1+n2);
    return n1+n2  // after return we can't execute anything return means end of code

}
sum(12,13)


function sum(n1,n2) {
    return n1+n2  
    
}
//console.log("sum of the number is ",sum(12,13));

// object and function

const user ={
    fname : "Ashish",
    age : 26
}
function handleObject(anyObject){
    //console.log(`user name is : ${anyObject.fname} and age is ${anyObject.age}`);
}

//handleObject(user)


handleObject({          //we can assign new value to object during code exection..
    fname : "Vishal",
    age : 25
})





// array and function

const array=[12,14,16,17]
function getArrayValue(){
    return array[1]
}
console.log(getArrayValue());

