function createUser(name,age, ...contacts){
    return {
        name, 
        age,
        contacts
    }
}

const user = createUser('Bruno', 20, 'email1@hotmail.com', 'email2@hotmail.com', 'email3@hotmail.com')
console.log(user)