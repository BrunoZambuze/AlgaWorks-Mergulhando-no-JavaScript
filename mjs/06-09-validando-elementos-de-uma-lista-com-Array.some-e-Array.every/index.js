const convidados = [
    {name: 'Lucas', age: 23},
    {name: 'Maria', age: 17},
    {name: 'Jean', age: 17},
    {name: 'Rogerio', age: 45},
    {name: 'Marcos', age: 18}
]

// Existem maiores de idade na lista de convidados?
const temAdulto = convidados.some(convidado => convidado.age >= 18)
console.log(temAdulto)

// Todos os convidados s maiores de idade?
const todosAdultos = convidados.every(convidado => convidado >= 18)
console.log(todosAdultos)