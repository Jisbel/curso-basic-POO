const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        faceboock: undefined,
    },
    approvedCourses:  [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
        "Curso de sistema de diseno ",

    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de Responsive desing",
            ]
        },
        {
            name: "Escuela de  videoJuegos",
            courses: [
                "Curso introduccion a la produccion de videojuegos",
                "Curso de unreal Engine",
                "Curso de Unioty 3D ",
            ]
        },
    ],
};

const miguelito1  = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        faceboock: undefined,
    },
    approvedCourses:  [
        "Curso de DataBusiness",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de Responsive desing",
            ]
        },
        {
            name: "Escuela de  Data Science",
            courses: [
                "Curso de DataBusiness",
                "Curso DataViz",
                "Curso Tableau"
            ]
        },
    ],
};

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        faceboock = undefined,
        approvedCourses = [],
        learningPaths =[],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            faceboock,
        };
       
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juando2 = new Student({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
})

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelito2",
    email: "miguelitofeliz@gmail.com",
    instagram: "miguel_feliz",
})