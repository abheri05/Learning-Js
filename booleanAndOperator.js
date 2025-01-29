//BOOLEAN
let isLightOn = true
let inRaining = false
let trueValue = 4>3
let falseValue = 3>4

console.log(isLightOn , inRaining, trueValue, falseValue)

// UNDEFINED AND NULL
let firstName 
console.log(firstName)

let empty = null
console.log(empty)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//OPERATOR
//1.Assignment Operator

let x=10
let y=9
console.log(x=y)         //y is stored in x
console.log(x+=y)        //x = x+y
console.log(x-=y)       // x = x-y
console.log(x*=y)       //x = x*y
console.log(x/=y)       // x= x/y
console.log(x%=y)       // x = x%y
console.log(x**=y)      // x = x**y
     
//Arithmatic Operator     
let a = 56
let b = 80

console.log('the arithmatic operation is:' ,(a+b))
console.log('the arithmatic operation is:' ,(a-b))
console.log('the arithmatic operation is:' ,(a*b))
console.log('the arithmatic operation is:' ,(a/b))
console.log('the arithmatic operation is:' ,(a*b))
console.log('the arithmatic operation is:' ,(a%b))
      
     
const PI = 3.14
const radius = 4

const areaOfCircle = PI*radius*radius
console.log(`circle area ${areaOfCircle}`)

const gravity = 9.14
const mass = 72

const weight= gravity * mass
console.log(`weight is: ${weight}`)

//Logical Operation

let p = 78
let q= 24

console.log(p>q && p<q)
console.log(p>q || p<q)
console.log(!(p>q))

//Comparison Operator
console.log(`the comparison operator is: ${3==3}`)
console.log(`the comparison operator is: ${3>=2}`)
console.log(`the comparison operator is: ${3>2}`)
console.log(`the comparison operator is: ${3!=2}`)
console.log(`the comparison operator is: ${5==4}`)
console.log(`the comparison operator is: ${5>4}`)
console.log(`the comparison operator is: ${5>=4}`)
console.log(`the comparison operator is: ${5<4}`)
console.log(`the comparison operator is: ${5<=4}`)
console.log(`the comparison operator is: ${5!=4}`)
console.log(`the comparison operator is: ${5==='5'}`)
console.log(`the comparison operator is: ${5!=="5"}`)
console.log(`Zero is ${0 == false}`)        //true
console.log(`Zero is ${0=== false}`)        //false
console.log(0 == '')                        //true
console.log(0 ==='')                        //false
console.log(1 == false)         //false
console.log(1==true)            //true
console.log(1===true)           //false
console.log(undefined==null)    //true
console.log(undefined===null)   //false
console.log(NaN == NaN)         //false
console.log(NaN === NaN)        //false

console.log("the diffence between the mango and the avogado:", 'mango'.length != 'orange'.length )
console.log("the diff between the mango and the orange is :", 'mango'.length === 'orange'.length)

//Increment
//1.post-increment
let count = 0;
console.log(count++)    //0
console.log(count)      //1

//2.pre-increment
let count1= 3
console.log(++count1)   //4
console.log(count1)     //4

//Decrement
//1.pre-decrement
let num = 7
console.log(--num)  //6
console.log(num)    //6

//2.post-decrement
let num2=8
console.log(num2--)     //8
console.log(num2)       //7


let num1= 'hi'
console.log(num1--)      //NaN
console.log(num1)        //NaN

//Ternary Operator
let isRaining = true
isRaining ? console.log("you have to need rain coat"): console.log('you dont need rain coat')

let isPainting = false
isPainting ? console.log('there is a beautiful painting') : console.log('there is no painting')

let number = 5
number>0 ? console.log("number is greater than 0") : console.log("number is lees than 0")

//Date Object
//1. Getting a time object
let now = new Date()
console.log("the time object is ", now)

//2.getting full year
let now1 = new Date()
console.log("the year is",now1.getFullYear())

//3. getting month
let now2 = new Date()
console.log("the month is",now2.getMonth())

//4. getting day
let now3 = new Date()
console.log("the date is" , now3.getDay())

//5.Getting hour
let now4 = new Date()
console.log("the hour of teh day is", now4.getHours())

//6.Getting mintues
let now5 = new Date()
console.log("the mon is", now5.getMinutes())