type Person = {
    nome:string,
    idade:number,
    contacts?:string[],
    isAlive:boolean
} 

const person:Person = {
    nome:'Bruno',
    idade:20,
    contacts:[
        'bruno@hotmail.com',
        'bruno@gmail.com'
    ],
    isAlive:true
}

const person2:Person = {
    nome:'Gabriel',
    idade:25,
    isAlive:true
}