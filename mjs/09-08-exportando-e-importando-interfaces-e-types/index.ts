import { Email, Person } from "./interfaces";

const person:Person = {
    nome:'Bruno',
    age:20
}

const email:Email = 'bruno@hotmail.com'





const person2:Person.Default = {
    nome:'Bruno',
    age:20
}

const person3:Person.WithContacts = {
    nome:'Bruno',
    age:20,
    contacts: ['bruno@hotmail.com']
}