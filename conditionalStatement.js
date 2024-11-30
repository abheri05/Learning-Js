//1.Check if a number is positive or negative: Write a program that takes a number as input and checks if it is positive,
// negative, or zero.

let input =30

if(input>0){
    console.log("it is positive number ")
}else if(input=0){
    console.log("the number is zero")
}else{
    console.log("it is negative")
}

//2.Grade Checker: Write a program that checks if a score (0–100) corresponds to an "A" (>= 90), "B" (>= 80), "C" (>= 70), or "F" (< 70).

let marks = 74

if(marks>=90){
    console.log('the grade is : A')
}else if(marks>=80){
    console.log("the grade is : B");
}else if(marks>=70){
    console.log("the grade is: C");
}else if(marks<70){
    console.log("the grade is: F");
    
}

//3.Odd or Even: Write a program that checks if a given number is odd or even.
let num = 93

if(num%2==0){
    console.log("the number is even")
}else{
    console.log("the number is odd");
}

//4.Eligibility for Voting: Write a program to check if a person is eligible to vote (age >= 18).

let age = 15
if(age>=18){
    console.log("you can eligible to vote");
    
}else if(age<18){
    console.log("you can't eligible for vote");
    
}

//5.Check for Leap Year: Write a program that determines whether a given year is a leap year.

const year = 2024

if (year%4==0 || year%400==0){
    console.log("it is a leap yaer");
    
}else{
    console.log("it is not a leap year");
    
}

//6.String Length Check: Write a program that checks if a string has more than 5 characters.

let str= 'Debajoyti'

if(str.length > 5){
    console.log("it has more than 5 char");
}else{
    console.log("it has only 5 char");
    
}

//7.Check Divisibility: Write a program to check if a number is divisible by 3, 5, or both.

const value = 45

if(value%3==0 && value%5==0){
    console.log("the number is divisible by both");
    
}else if(value%3==0){
    console.log("the numberis divisible by 3");
    
}else if(value%5==0){
    console.log("the numberis divisible by 5");
    
}

//8.Find the Largest of Two Numbers: Write a program to determine the larger of two given numbers.

let a = 78
let b = 55

if(a>b){
    `${a} is greater that ${b} `
}
else{
    `${b} is greater than ${a}`
}

// 9.Check Temperature: Write a program to categorize temperature: "Cold" (< 15), "Warm" (15–30), and "Hot" (> 30).

let temp = 29

if(temp>30){
    console.log("hot");
    
}else if(15<temp<30){
    console.log("warm");
    
}
else if(temp<15){
    console.log("cold")
}

//10.Check for Day: Write a program that checks if a given day (string) is a weekday or weekend.

let day = 'monday'

if(day== 'monday' || day=='tuesday' || day== 'wednesday' || day== 'tuesday' || day=="friday" ){
    console.log("the day is weekday");
    
}
else  if(day=='saturday' || day=='sunday'){
    console.log("the day is weekend");
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++ Intermediate Problrm +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1.Find the Largest of Three Numbers: Write a program to determine the largest of three numbers.

let x= 90
let y= 900
let z= 9000

if( x>=y && x>=z){
    console.log(`${x} is largest`);
    
}else if(y>x && y>z){
    console.log(`${y} is largest`);
}else if(z>x && z>y){
    console.log(`${z} is largest`);
}

//2.User Login Simulation: Write a program that checks if the entered username and password match predefined values and grants or denies access.

let predefinedUsername = "abheric43@gmail.com"
let predefinedPassword = "liza@liza0"

let username = "totaop69@gmail.com"
let password = 'op234!'

if(predefinedUsername === username && predefinedPassword === password){
    console.log("grants the access");
    
}else if(predefinedUsername !== username && predefinedPassword !== password){
    console.log("access denied");
    
}

//3.Number Classification: Write a program to classify a number as "positive even," "positive odd," "negative even," or "negative odd."

let num1 = 765

if (num1>0 && num1%2 ==0){
    console.log(`${num1} is positive even`);
    
}else if (num1>0 && num1%2 !=0){
    console.log(`${num1} is positive odd`);
    
}else if (num1<0 && num1%2 ==0){
    console.log(`${num1} is negative even`);
    
}else if (num1<0 && num1%2 !=0){
    console.log(`${num1} is negative odd`);
    
}

// 5.Grade Calculator: Write a program that takes a score and determines the grade using multiple conditions:

// A (90–100)
// B (80–89)
// C (70–79)
// D (60–69)
// F (< 60)

let mark = 82

if( mark > 90 && mark < 100){
    console.log("A");
    
}else if(mark > 80 && mark < 89 ){
    console.log("B");
    
}else if( mark > 70 && mark < 79 ){
    console.log("C");
    
}else if( mark > 60 && mark < 69 ){
    console.log("D");
    
}else {
    console.log("F");
    
}

//6.Number Range Checker: Write a program to check if a number falls within the range 1–50, 51–100, or above 100.
let score= 140

if(score>1 && score<50){
    console.log(`${score} falls between 1-50`);
    
}else if(score>51 && score<100){
    console.log(`${score} falls between 51-100`);
    
}else if(score>100 ){
    console.log(`${score} above 100`);
    
}

//4.Triangle Type Checker: Write a program that takes three sides of a triangle and determines if it's "Equilateral," "Isosceles," or "Scalene."

let side1=5
let side2=5
let side3=3
if(side1===side2 && side2===side3 && side3===side1){
    console.log("it is Equilateral");
    
}else if(side1===side2 && side2!=side3 && side3!=side1){
    console.log("it is Isosceles");
    
}else {
    console.log("it is Isosceles");
    
}

// 8.Nested Conditionals for Discounts: Write a program that calculates a discount:

// Purchase < $100: no discount
// Purchase $100–$500: 10% discount
// Purchase > $500: 20% discount

let price= '200'

if(price<100){
    console.log("There is no discount")
}else if(price>100 && price<500){
    console.log("There is 10% discount")
}else if(price>100){
    console.log("There is 20% discount")
}


//10.Traffic Light System: Write a program that simulates a traffic light. Input is "red," "yellow," or "green," and 
//the output should indicate what the driver should do ("stop," "wait," "go")

let light = 'green'

if(light == 'red'){
    consol.log("Stop")
}
else if(light == 'yellow'){
    console.log("wait")
}
else if(light == 'green '){
    console.log("go")
}