const parts = ['ombro', 'joelho']
// const sentence = ['cabeça', parts[0], parts[1], 'pé']
const sentence = ['cabeça', ...parts, 'pé']

console.log(sentence)



function createUser(name, age, ...contacts){
    return {
        name,
        age,
        contacts
    }
}

var user = createUser('Bruno', 20, 'bruno1@hotmail.com', 'bruno2@hotmail.com', 'bruno3@hotmail.com', 'bruno4@hotmail.com')
console.log(user)