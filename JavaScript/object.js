// objects are reference type..its store data in key value pairs..

const person = {
    firstName : "ashish",
    lastName : "Yadav",
    age :  26,
    "Address" : "Lucknow"

}


//console.log(person);

// there are 2 way to access data from the object..

console.log(person.firstName);
console.log(person["lastName"]);

// Add key and value in existing object....

person.id=123

console.log(person);

// for in loop in object 

for (let key in person){
    console.log(key); // -> its print the only key  form object
}

for (let key in person){
    console.log(person[key]); // -> its print the only value form object
}

for (let key in person){
    console.log(key , " : ",person[key]); // -> its print the key  along with value  form object
}

// object.key() -> it is used to print the key in array format..

console.log(Object.keys(person));

// object.values() is used to print the value in array format..

console.log(Object.values(person));

// object.entries() -> this method is used to print the key and value data in array format
console.log(Object.entries(person));