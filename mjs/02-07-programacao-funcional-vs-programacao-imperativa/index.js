var person = {
    age: 16,
    name: 'Lucas'
}

function getRemainingYearsToMajorty(person){
    var idade = 18 - person.age
    if((idade > 0) & (idade < 18)){
        console.log('Pessoa falta ' + idade + ' anos para chegar a maior idade')
    } else {
        console.log('Pessoa já é maior de idade')
    }
    
}

function setAgePerson(person){
    person.age = person.age + 1
}

setAgePerson(person)
getRemainingYearsToMajorty(person)