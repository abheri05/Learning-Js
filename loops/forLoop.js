// example of a for loop

for(let i=2;i<=6;i++){
    console.log('i am a girl')
}

//reverse the numbers
for(let i=20; i>= 0; i--){
    console.log(i)
}

// For loop to print table of a number
let x=5
for(let i=0; i<=10 ;i++){
    console.log("the table of the number 5 is:", x*i)
}

//For loop to print elements of an array.
let arr=[29,90,23,43,56]
i=0
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

const subjects= ["bengali","english","math","history"]

for(let i=0; i< subjects.length ; i++){
    console.log(subjects[i])
}


// Initializing Counter Variable

let val= 3;
for(; val<= 10 ;val++){
    console.log(val)
}

//for…in loop

let car={
    make: "Toyota",
    model: "Corolla",
    year: 2020
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

let array= ["kolkata", 23,"rupa",7001]

for(let key in array){
    console.log(` each key ${key} : ${array[key]}`)
}
const obj={
    name: "abheri",
    age:23,
    gender:"female"
}
for(let key in obj){
    console.log(`all key ${key} : ${obj[key]}`)
}

const data=["lolipop","chocolate", "kurkure","lays"]
for(let keys in data){
    console.log(`the keys on data ${keys}: ${data[keys]}`)
}

//JavaScript for…of Loop

//Iterating Over an Array using for…of
const num=[15,30,45,60,75]
for(let val of num){
    console.log(val)
}

//2. Iterating Over a String using for…of

const arr1 = ["JavaScript", "Python", "C", "C++", "HTML", "CSS"];

for(let char of arr1){
    console.log(char)
}

let course ="javascript"

for(let ele of course){
    console.log(ele)
}

//5. Iterating Over an Object’s Properties using for…of
const person={
    name:'ishan',
    gender:'male',
    skills:'backend developer',
    degree:'b.tech'
}

for(const elem of Object.keys(person)){
    console.log(`${elem}:${person[elem]}`)
}

const subject=['html','css','javascript','react']
for(const prod of subject){
    console.log(`the prod of subject is : ${prod}`)
}


