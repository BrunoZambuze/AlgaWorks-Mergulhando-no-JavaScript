function sum (a, b){
    console.log(this)
    return a + b
}

const me = {
    name: 'José'
}

var result = sum.call(me, 1, 2)
console.log(result)

var result2 = sum.apply(me, [1, 2])
console.log(result2)