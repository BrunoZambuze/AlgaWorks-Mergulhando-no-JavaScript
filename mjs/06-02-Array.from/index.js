function greet(){
    var args = Array.from(arguments)
    args.forEach(argument => {
        console.log(argument)
    })
}

greet('Olá', 'Bom dia', 'Boa tarde')