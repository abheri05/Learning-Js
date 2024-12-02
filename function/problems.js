//1.Write a function to calculate the square of a number.
function square(num){
    return num*num
}
console.log(square(9))

//2.Create a function to check if a number is even or odd.

function myFunction(num){
    if(num%2==0){
        console.log(`${num} is even`);
        
    }else{
        console.log(`${num} is odd`)
    }
}
myFunction(48)


//3.Write a function that accepts a string and returns its length.

function string(name){
    return name.length
}
console.log(string("Abheri"))

//4.Define a function that adds two numbers and returns the result.
 function addNumber(x,y){
    return x+y
 }
 console.log(addNumber(2,3))

//5.Write a function to convert Celsius to Fahrenheit.

function convert(cel){
    return (cel*(9/5)+32)
}
console.log(convert(32))


//6.Create a function that takes an array and returns the first element.


function calculate(val){
    if(val.length===0){
        return undefined
    }
    return arr[0]
}
let arr = [12,34,56]
console.log(calculate(arr))


// 7.Write a function that prints "Hello, [name]!" where the name is passed as an argument.

function sayHello(name){
    console.log('Hello!',name)
}
sayHello('Abheri')

//8.Create a function to calculate the area of a rectangle (length × width).

function rectangle(x,y){
    return x*y
}
console.log(rectangle(5,4))

//9.Write a function that checks whether a string is empty or not.

function checking(str){
    if(str.length == 0){
        return undefined
    }
    else{
        return (str.length)
    }
}
let element = "Debajoyti"
console.log(checking(element))

//10.Define a function that reverses a string and returns it.


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
    
//     // Example usage
// let myString = "Hello, World!";
// console.log(reverseString(myString)); // Output: "!dlroW ,olleH"
    

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.Write a function that takes an array of numbers and returns the sum of all numbers.

function sumNum(num){
    let total =0

    for(let key of num){
        total += key
    }
    return total
}
let arr1 = [2,3,4,5,6]
console.log(sumNum(arr1))

//3.Create a function to check if a number is prime.
// function primeNum(number){
//     if(number)
// }

//4. Write a function to find the area of a given Rectangle
function rectangle(a,b){
    return a*b
}

console.log(rectangle(4,8))

//5. Write a function to find the area and perimeter of a Circle
function circle(redius){
    return `Area:${Math.PI*redius*redius}  and perimeter${2*Math.PI*redius}`
}
console.log(circle(5))

//6. Write a function to reverse a number
function reverseNum(num){
    let reverse = 0
    while(num!= 0){
        reverse = reverse * 10
        reverse = reverse + num%10
        num = Math.trunc(num/10);
    }
    return reverse
}
console.log(reverseNum(5432))

//7. Count number of Vowels in String
function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }

console.log(countVowel('chakraborty'))