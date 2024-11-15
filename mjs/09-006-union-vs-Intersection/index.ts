//Union
type Cpf = string | number 

function findPerson(cpf:Cpf){
    if(typeof cpf == 'string'){
        return cpf.toUpperCase()
    }
    return cpf.toFixed(2)
}

findPerson(123)
findPerson('123')

//Intersection
type Animal = { sex: 'male' | 'female' }
type Human = { hungry: boolean }

type Person = Animal & Human

const pessoa:Person = {
    sex: "male",
    hungry: true
}