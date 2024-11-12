function handleClick(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(123)
        }, 5000)
    })
}

const result = handleClick().then((res) => {
    console.log(123 == res)
    return res
})
.catch((error) => {
    console.log('Houve um erro')
    console.log(error)
})

console.log(result)