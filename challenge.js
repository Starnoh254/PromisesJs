const promise = fetch('http://localhost:8080/getMessages?name=Starnoh')
const data = promise
    .then((response) => response.json()
    .then((data) => console.log(data[0].message)))
    .catch((e) => console.error(e))

