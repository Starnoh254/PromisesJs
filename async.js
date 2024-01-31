async function  get_data(callback) {
    setTimeout(()=>{
        const greeting = "Hello Starnoh"
        callback("Greeting: "+greeting);
    } , 5000)
}

console.log("The data is loading")

get_data(console.log)