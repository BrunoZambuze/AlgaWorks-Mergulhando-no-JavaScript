const user = {
    name: 'danielbonifacio',
    email: 'contato@danielbonifacio.com'
}

const newUser = {...user}
newUser.name = 'joao'
newUser.email = 'joao@hotmail.com'

console.log(user)
console.log(newUser)
