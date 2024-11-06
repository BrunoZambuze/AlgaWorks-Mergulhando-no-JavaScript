class Animal {
    sex

    constructor (props){
        this.sex = props.sex
    }
}

class Human extends Animal{
    hungry = true
    name
    age

    constructor (props) {
        super(props.sex)
        if(!props.name){
            throw Error('Nome é obrigatório')
        }
        this.name = props.name
        this.sex = props.sex

    }

    eat(){
        console.log('Comendo...')
        this.hungry = false
    }
}

const person = new Human({
    name: 'Lucas',
    age: 30,
    sex: 'Male'
})
person.eat()
console.log(person.hungry)
console.log(person)