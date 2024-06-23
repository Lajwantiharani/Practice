
//for 
let marks ={
    shiv: 90,
    laj : 82,
    urooj:60,
}
for(i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of "+ Object.keys(marks)[i] + marks[Object.keys(marks)[i]])
}

//for  in 
for( let i in marks){
    console.log(i +marks[i])
}

//for off loop
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
 
}
console.log(cars)

//while

let t = "";
//let i = 0;

while (i < 10) {
  t += "<br>The number is " + i;
  i++;
 

}
console.log(t)


let q = "";
let i = 0;

do {
  q += "<br>The number is " + i;
  i++;
}
while (i < 10);

console.log(q);


for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}



