let promise = new Promise((resolve,reject)=>{
    console.log("Abheri")
    resolve(1000)
})

let Promise1= new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("hello guys! here we are learning js");
    },2000);
    reject(3)
})
Promise1.catch((error) => {
    console.log("Error:", error); // This will catch the rejection and log the error message
});

let promise2 = new Promise(function(resolve, reject){
     const x = 89
     const y = 89

     if (x == y){
        resolve()
     }else{
        reject()
     }
})

promise2.then(function(){
    console.log("both the variables are same")
}).catch(function(){
    console.log("both are rejected")
})

let promise3 = new Promise(function(resolve,reject){
    const x = 23
    const y = 32
    
    if(x==y){
        resolve()
    }
    else{
        reject()
    }
})

promise3.then(function(){
    console.log("this is the function")
}).catch(function(){
    console.log("rejected")
})


const newPromises = new Promise(function(resolve,reject){
    const arr = [ 2,3,4,5,6]
    
    if(arr%2 ==0){
        resolve()
    }
    else if(arr%2 !=0) {
        reject()
    }
    
})

newPromises.then(function(){
    console.log("arr is divisible by 2")
}).catch(function(){
    console.log("arr is not divisible by 2")
})



//////////////////////////////////////////////////// PRACTICE JS PROMISE ////////////////////////////////////////////////////////////

let firstPromise = new Promise((resolve,reject)=>{
    console.log("My name is LIZA")
    resolve(1)
})

const secondPromise = new Promise(function(resolve,reject){
    let x= 20
    let y=200

    if(x==y){
        resolve("both the numbers are same")
    }else{
        reject("error")
    }
})
secondPromise.then(function(result){
    console.log(result)

}).catch(function(error){
    console.log(error)
})

const anotherOne  = new Promise(function(resolve,reject){
    for(let i=0; i<=10 ; i++){
        console.log(i)
        resolve("count is finish")
    }
})
anotherOne.then(function(res){
    console.log(res)
})

const checkPromise = new Promise(function(resolve,reject){
    let success= false
    if(success){
        resolve()
    }
    else{
        reject()
    }
})
checkPromise.then(function(check){
    console.log("it's successful")
}).catch(function(error){
    console.log("it's unsuccessful")
})

const thirdPromise = new Promise(function(resolve,reject){
    let arr=[2,3,4,5,6]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        if(arr[i]>2 && arr[i]<7){
            resolve()
        }
        else if(arr[i]<2){
            reject()
        }
        
    }
})
thirdPromise.then(function(result){
    console.log("the array is defined")
}).catch(function(error){
    console.log("it's not defined")
})

//Multiple promises

const multiplePromise = new Promise(function(resolve,reject){
    let a = "ABheri"
    let b ="ABheri"
     if(a==b){
        resolve("a and b are same")
     }else{
        reject()
    }
})
multiplePromise.then(function(output){
    console.log("first message is print: ", output)
    return output
}).then(function(output){
    console.log('second message is printed: ', output)
    return output
}).then(function(output){
    console.log('third message is printed: ', output)
    return output
}).catch(function(error){
    console.log("it shows error")
}).finally(function(output){
    console.log("now i am learning javascript")
    return output
})