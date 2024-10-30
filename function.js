//function decaration
function myFunction(a,b){
    return a+b
}

console.log(myFunction(3,4))  //function call

//Arithmatic Operation by function
function myFunc(x,y,z){
    return x+y-z
}
console.log(myFunc(8,2,6))

//Square Of a number
function square(num){
    return num**num
}
let number = square(3)
console.log(number)

// SquareRoot of the Number
const squareRoot = (num)=>{
   return Math.sqrt(num)
}
let sqrt=squareRoot(49)
console.log(`the SquareRoot of the number is ${sqrt}`)

// print all the Even number from 0 to 100
function evenNumber (num){
    for(num =0; num<=80 ;num++){
        if(num%5==0){
            console.log('even number: ',num)
        }
    }
}
evenNumber(80)


// This is how to print the objects key-value by using function
let object ={
    name:"liza",
    age:24,
    location:"Bandel",
    degree:"B.tech"
}
function myObj(obj){
   for(let key in obj){         //take a for..in loop
    if(obj.hasOwnProperty(key)){        //obj.hasOwnProperty(key) ensures it only prints the object's own properties.
        console.log(obj[key])
    }
   }
}
myObj(object)

const continent={
    country: 'India',
    state:"West Bengal",
    district:'Hooghly',
    city:'Bandel'
}
let newName=function myCountry(names){
    names.country='America',
    names.city='mexico'
}
newName(continent)
console.log(continent.country)
console.log(continent)
console.log(continent.value) //it prints undefined


//Spread operator
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x)

  
//built-in object called the arguments object.
  const a = sumAll(1, 2,3,4,5)
function sumAll(){
    let sum = 0
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}
sumAll()
console.log(a)

//again practice
const foods={
    starter:'chicken pahari kabab',
    mainCourse:['Biriyani', 'chicken kosha'],
    dessart:'rosmalai'
}
function foodie(otem){
    for(let item in otem){
        if (otem.hasOwnProperty(item)){
            console.log(otem[item])
        }
    }
}
foodie(foods)
//to print the value of "mainCourse" arr differently
foods.mainCourse.forEach(mainCourse=>{
    console.log(mainCourse)
})

let arr=[23,43,56,54,78,65]
function myArr(arr){
   
    for(let i=0; i<arr.length;i++){
        console.log(arr[i])
    }
}
myArr(arr)


// again practice

const continentName={
    country:"India",
    state:"West Bengal",
    district:"Hooghly",
    city:"Bandel"
}
function addAll(value){
    for(let item in value){
        if(value.hasOwnProperty(item)){
            console.log(value[item])
        }
    }
}
addAll(continentName)

