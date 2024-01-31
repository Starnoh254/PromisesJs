function get_data () {

    return new Promise((resolve , reject) => {
        const promise = fetch('http://localhost:8080/getMessages?name=Starnoh')
        console.log("Waiting")
        const data = promise
            .then((response) => response.json())
            .then((data) => {
                resolve(data[0].message)
                console.log(data[0].message)})
            .catch((e) => {
                reject("An error occurred")
                console.error(e)})

        
    }) 
    
    
}

get_data()
    .then((result) => console.log(`Success! ${result}`))
    .catch((result) =>  console.log(`Error! ${result}`));
