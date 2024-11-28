//1.Print numbers from 1 to 10
// Write a program using a loop to print numbers from 1 to 10

for(let i=1; i<=10;i++){
    console.log(i)
}

// 2.Sum of first 10 natural numbers
// Write a program to calculate the sum of the first 10 natural numbers (1 to 10) using a loop.

let sum=0;
for(let i=0;i<=10;i++){
    sum += i
}
console.log('the sum of all the number is:', sum)


//3.Print elements of an array
// Given an array let fruits = ['apple', 'banana', 'cherry'];, use a loop to print each fruit in the array.
 
let array = ["apple",'banana','cherry']

for(let val of array){
    console.log(`each fruit: ${val}`)
}

// 4.Print even numbers from 1 to 20
// Write a loop that prints all even numbers between 1 and 20.


for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log('all the even numbers are:', i)
    }
}

// 5.Reverse an array
// Given an array let nums = [1, 2, 3, 4, 5];, use a loop to print the elements in reverse order.

let nums=[1,2,3,4,5]
for(let i=5 ;i>=0 ;i--){
    console.log(nums[i])
}

// 1.FizzBuzz Problem
// Write a program that prints numbers from 1 to 50.

// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For numbers divisible by both, print "FizzBuzz".

let num = 0
for( let num= 0 ; num<=50 ;num++){
    if(num%3===0 && num%5===0){
        console.log('FizzBuzz')
    }else if(num%5===0){
        console.log('Buzz')
    }else if(num%3===0 ){
        console.log('Fizz')
    }else{
        console.log(num)
    }
    
}


// 2.Factorial of a number
// Write a program to calculate the factorial of a given number using a loop.
// Example: If the number is 5, the output should be 120 (because 
// 5*4*3*2*1=120)

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}.`);


// 3.Prime numbers up to a given number
// Write a program to print all prime numbers less than a given number 
// 𝑁
// N.
// Example: For 
// 𝑁
// =
// 20
// N=20, the output should be 2, 3, 5, 7, 11, 13, 17, 19.

let N=20

for(let i=0;i<N; i++){
    if(i%1===0 && i%N===0){
        console.log(N)
    }
}




