var person1 = {
    name:'Bruno',
    age:20
}

var person2 = {
    name:'Daniel',
    age:22
}

var person3 = {
    name:'Rafaela',
    age:30
}

var list = [person1, person2, person3]

for (var person of list){
    console.log(person.name)
}