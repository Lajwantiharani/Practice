
/* Map is used for making new array */
let arr =[ 45,56,76]
let a =arr.map((value,index,array)=>{

console.log(value,index,array)
return value + 1
})
console.log(a)

/* for each is used for doing operation on one existing array */


//filter METHOD
let arr2 =[22,33,34,4]
 let a2 = arr2.filter((value)=>{
    return value<10
})
console.log(a2)


//Array reduce method
let arr3 = [1,2,3,4,5]
let newarr3 =arr3.reduce((h1,h2)=>{
    return h1 +h2
})
console.log(newarr3)


//PUSH METHOD



