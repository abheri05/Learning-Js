//In contrast to variable , an array can store multiple values, each value in an array has a index and each index has a reference
//in the memory address. each value can be accessed by using their index. the index of an array start from zero and the index of
//last element is less than one from the length of the array.

// Array is the collection of different datatype which are orderd and changeable.it can be empty or it may have different datatype
//value.We can create array in different ways.

//1. using array constructor
const arr = new Array(2,4,6,8)
console.log(arr)

//using square brackets
const arr1 = [2,4,6,8]
console.log(arr1)

//How to create an array with values
//using initial value. and also use length property
let city = ['Kolkata', 'Delhi', 'Mumbai',' Pune', 'Panjab', 'Bangalore', 'Hydrabad', 'Noida']
console.log("citys are:", city) 
console.log("the length of the array",city.length)

const fruits=["mango",'orange','banana','cucumber','graps']
console.log("fruits are:", fruits)
console.log("the length of fruits:", fruits.length)

//Array can have items of different data types
let array=[
    name="aritri",
    age=23,
    location='katwa',
    {country:'india',city:'noida'},
    {skills:['HTML','CSS','JS','node.js']}
]
console.log(array)

const newArr =[
    'abheri',
    28,
    'Bandel',
    {location:'kolkata', city:'chinsurah'},
    {courses:['html', 'css', ' js','python']}
]
console.log(newArr)
console.log(newArr.length)

//Creating an array using split
let subject= 'Javascript'
const sizeOfSubject = subject.split('')
console.log(sizeOfSubject)

let place='bally'
const sizeOfSpace = place.split("")
console.log(sizeOfSpace)

let text = 'I love teaching and empowering people.'
const splitText = text.split('')
console.log(splitText)

//Accessing array items using index
let name1 = ["liza","ishan","tatai","sonama"]
console.log(name1.length)
console.log(name1[2])
console.log(name[1])
let lastIndex = name1[name1.length - 1]
console.log(lastIndex)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log(countries[5])
countries[5]= 'Africa 😶‍🌫️'
console.log(countries)

let lastCountry = countries[countries.length-1]
console.log(lastCountry)

//Methods to manipulate array
//1.Creating static values with fill
let arr2 = new Array()

let number = Array(3).fill('y')
console.log(number)

let fiveNumber = Array(5).fill("o")
console.log(fiveNumber)

let eightNumber = Array(8).fill('q')
console.log(eightNumber)

//2.Concatenating array using concat
let num = [1,2,3,4]
let num1= [5,6,7,8]
let totalNum= num.concat(num1)
console.log(totalNum)

let fruit = ['mango',"banana",'orange','graps']
let vagetables = ['potato','tomato','onion']
let fruitVagetables= fruit.concat(vagetables)
console.log(fruitVagetables)

//Check items in a list
const flower =['lotus','rose','sunflower','lily','tulip']
let index = fruits.indexOf('rose')

if (index === -1){
    console.log("the flower is not exist in the array")
}else{
    console.log("th eflower is exist in the array")
}