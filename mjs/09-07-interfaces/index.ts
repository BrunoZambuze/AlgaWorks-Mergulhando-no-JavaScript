interface Animal {
    hungry:boolean
}

interface Human extends Animal{
    nome:string,
    age:number
}

interface Human {
    sex:'male' | 'female'
}

const pessoa:Human = {
    nome:'Bruno',
    age:20,
    sex:"male",
    hungry:true
}