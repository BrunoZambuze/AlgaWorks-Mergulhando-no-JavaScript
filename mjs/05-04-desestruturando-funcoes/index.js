function createUser(name, age, email){
    return {
        name,
        age,
        contact: {email}
    }
}

const {contact: email} = createUser('Bruno silva', 20, 'brunosilva@hotmail.com')

console.log(email)