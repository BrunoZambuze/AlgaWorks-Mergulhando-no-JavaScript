const fruits = ['manga', 'banana', 'morango'] 

const [, secondItem] = fruits

const person1 = {
    name: 'Joao',
    age: 20
}

const person2 = {
    name: 'Marcelo',
    age: 22
}

const person3 = {
    name: 'Rafael',
    age: 29
}

const friends = [person1, person2, person3]

const [, {name}, {name2}] = friends



console.log(secondItem)
console.log(name2)