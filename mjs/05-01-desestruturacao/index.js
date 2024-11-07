const person = {
    name: 'Italo',
    age: 19
}

function introduce ({name, age}){
    console.log(`Olá, meu nome é ${name} e tenho ${age} anos`)
}

const fruits = ['banana', 'morango', 'manga']
const [firstFruit, secondFruit] = fruits

introduce(person)
console.log(firstFruit, secondFruit)