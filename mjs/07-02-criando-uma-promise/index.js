const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('😊')
        reject('🛑')
    }, 5000)
})

console.log(promise)