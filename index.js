// simulate a delay

function getUsers () {

    return new Promise ((resolve ) => {
        let users = []
    // delay 1 second

    setTimeout(() => {
        users = [
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' }
        ]
        resolve(users)
    }, 4000)
    })
    

    
}

console.log("the program execution continued")

function findUser(username , callback){
    getUsers().then ((users) => {
        const user = users.find((user) => user.username == username )
        callback(user)
    })
    
    
}

findUser('jane', console.log)

console.log("the program execution continued  again ")
