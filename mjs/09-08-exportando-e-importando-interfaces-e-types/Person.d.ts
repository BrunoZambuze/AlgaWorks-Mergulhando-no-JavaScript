declare namespace Person {

    type Email = string

    export interface Default {
        nome:string,
        age:number
    }

    export interface WithContacts extends Default{
        contacts:Email[]
    }

}