
async function getLocation(){
    return new Promise (async (resolve , reject) => {

        try {
            const response = await fetch(`https://us1.locationiq.com/v1/search?key=pk.36159c12a2641d35d1bb6845ec4ce381&q=Nairobi%20County%20%2C%20Kenya&format=json`)
        
            const data = await response.json()
            
            console.log(data)
            console.log(`${data[0]?.lat} ,, ${data[0]?.lon}`)
            resolve([data[0]?.lat , data[0]?.lon])
        }
        catch (e){
            console.error(e)
            reject ("City not found")
        }
    })
}

async function getWeatherData(lat , long ) {

    const api_key = "2a18d440e465399454663a87c207e809"
    return new Promise (async(resolve , reject) => {
        try {
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
            const data = await response.json()
            console.log(data)
            resolve(data) 
        }
        
        catch (error){
            console.error(error)
            reject(error)
        }
    })
}

console.log("Loading ...")


// function onSuccess (data) {
//     console.log(`here is ${JSON.stringify(data)}`)
// }

function onError (err) {
    console.log(`ERROR : ${err}`)
}

// function onFinally (){
//     console.log ("This is the end of the process")
// }


async function getResults () {
    try {
        const results = await getLocation()
        console.log(`Here is ${results[0]}`)
        const weatherResults = await  getWeatherData(results[0], results[1])
        console.log(weatherResults)
    
    }
    catch (error) {
        onError(error)
    }
    
}

getResults()
    
