const students = [
    {name: 'Lucas', grade: 8},
    {name: 'Maria', grade: 2},
    {name: 'Jean', grade: 10},
    {name: 'Rogerio', grade: 6},
    {name: 'Marcos', grade: 5}
]

var teste = students.find(student => student.name == 'Lucas')
console.log(teste)