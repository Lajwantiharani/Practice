//SPLICE

let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2, "kiwi", "mango");

console.log(fruits);
console.log(removed); 

//SLICE
let fru = ["apple", "banana", "cherry", "date"];
let sliced = fru.slice(1, 3);
console.log(fru); 
console.log(sliced); 

//PUSH
let f = ["apple", "banana"];

let newLength = f.push("cherry", "date");
console.log(f); 
console.log(newLength); 

//POP
let fruit = ["apple", "banana", "cherry", "date"];
let lastElement = fruit.pop();
console.log(fruit); 
console.log(lastElement); 
