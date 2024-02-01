// async function  get_data(callback) {
//     setTimeout(()=>{
//         const greeting = "Hello Starnoh"
//         callback("Greeting: "+greeting);
//     } , 5000)
// }

// console.log("The data is loading")

// get_data(console.log)

// Fetching weather data using promises 






function getLocation(){
    return new Promise ((resolve , reject) => {
        fetch(`https://us1.locationiq.com/v1/search?key=pk.36159c12a2641d35d1bb6845ec4ce381&q=Nairobi%20County%20%2C%20Kenya&format=json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(`${data[0]?.lat} ,, ${data[0]?.lon}`)
            resolve([data[0]?.lat , data[0]?.lon])})
        .catch (error => reject ("City not found"))
    })
}

function getWeatherData(lat , long ) {

    const api_key = "2a18d440e465399454663a87c207e809"
    return new Promise ((resolve , reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            resolve(data)})
        .catch((error) => reject(error))
    })
}

console.log("Loading ...")


function onSuccess (data) {
    console.log(`here is ${JSON.stringify(data)}`)
}

function onError (err) {
    console.log(`ERROR : ${err}`)
}

function onFinally (){
    console.log ("This is the end of the process")
}

getLocation()
    .then(coords =>{
        const lat = coords[0]
        const lon = coords [1]
        console.log (`Latitude: ${lat}, Longitude: ${lon}`)
        return getWeatherData(lat , lon )
    }).then(onSuccess)
      .catch(onError)
      .finally(onFinally)
    
