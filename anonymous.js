// anonymous functions in javascript 
// let show = function (){
//     console.log("Anonymous function");
// }

// show()

// setTimeout(function (){
//     console.log('This is a callback');
// },2000)

// An example of an IIFE
// (function(){
//     let secretMessage = "I am the king";
//     console.log(secretMessage)
// })()

function regularFunction(){
    this.value = 35
    setTimeout(function(){
        console.log(this.value)
    } , 2000)
}

function arrowFunction(){
    this.value = 35
    setTimeout(()=> console.log(this.value) , 2000)
}

regularFunction()
arrowFunction()