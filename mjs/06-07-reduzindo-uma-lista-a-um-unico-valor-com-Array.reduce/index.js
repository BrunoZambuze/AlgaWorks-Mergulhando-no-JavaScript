const students = [
    {name: 'Lucas', grade: 8},
    {name: 'Maria', grade: 2},
    {name: 'Jean', grade: 10},
    {name: 'Rogerio', grade: 6},
    {name: 'Marcos', grade: 5}
]

const classroomTotalPoints = students.reduce(
    (valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual.grade
    }, 0)

    console.log(classroomTotalPoints)