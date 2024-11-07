const person = {
    name: 'Italo',
    age: 19,
    contact: {
        email: 'italo@gmail.com'
    }
}

const {name, age, contact: email} = person

console.log(age, email)