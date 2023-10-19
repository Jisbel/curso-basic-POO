const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HYML y CSS",
        "Curso practico de HYML y CSS",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
}

    const juanita = new Student(
        "Juanita Alejandra",
        15,
        [
            "curso de introduccion a al produccion de videojuegos",
            "Curso de creacion de personajes"
        ],
    );

//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados ;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}


const miguelito = new Student2({
    email: "miguielito@gmail.com",
    age: 28,
    name: "Miguel",
});
