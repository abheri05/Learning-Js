//non singleton object
const jsUser={
    name:"Abheri",
    age:23,
    email:"liza@gmail.com",
    isLoggedIn:true
}
console.log(jsUser)
//to print specific data
console.log(jsUser.email)

const person={
    name:"Ishan",
    age:23,
    hobby:["teaching me everything","give me more love","eating my head"],
    "my Pov":"i love him so much" //it print as a string
}
console.log(person)
console.log(person.hobby) // the asrray will be declare by (.) 

console.log(person["my Pov"]) //in this line both the key and the value are String. So, we will declare the value of the key by using [].

//how to declare 'SYMBOL' in object?

const mySymbol = Symbol("INDIA")

const country={
    //mySymbol =="INDIA" ==> is not a correct way to declare symbol in object
    [mySymbol]:"it is my country => INDIA",
    isLoggedIn: true,
    city:"London"
}
country.city="America"
console.log(country)
console.log(country[mySymbol]) // it gives us "it is my country => INDIA"
console.log(country.mySymbol) // undefined

country.greet = function(){
    console.log("it is a greetngs function") 
    return("it is a greetngs function")
}
console.log(country.greet()) // this is also give us undefined


jsUser.greetings = function(){
    console.log(`hello guys ${this.name}`)
}
console.log(jsUser.greetings)  //this give the output [function(anonyms)]
console.log(jsUser.greetings())

// ====================================================================================================================================================

//singleton object

const fbUser = new Object() 

fbUser.name ="Abheri Chakraborty",
fbUser.id ="12345",
fbUser.isLoggedIn ="false",
console.log(fbUser)
console.log(fbUser.name)

//nested object
const obj={
    email :" liza@gmaol.com",
    fullname:{
        username:{
            name:"Jhon",
            location:"newyork"
        }
    }
}
console.log(obj.fullname)
console.log(obj.fullname.username)
console.log(obj)

//how to access particular any array inside the object 
const courses={
    courseName:["HTML","CSS","JS","REACT"],
    fees: 899,
    courseInstructor: "hitesh"
}

courses.courseName.forEach(course => {
    console.log(course);
});
console.log(courses)

const continent ={
    country:["India","Pakistan","Nepal","Bhutan"],
    sate:"WestBengal",
    district :["Hooghly","Howrh","24pgns","Nadia"],
    city:"Chinsurah"
}
continent.country.forEach(country=>{
    continent.country[1]="Russia"   //to change any array value inside the object
    console.log(country)
})

continent.district.forEach(district =>{
    continent.district[1]="NGP"
    console.log(district)
})
console.log(continent)