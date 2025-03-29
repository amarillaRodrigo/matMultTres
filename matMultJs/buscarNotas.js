let students = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
];


function findStudent(name) {
    name = name.toLowerCase();
    return students.find(student => student[0].toLowerCase() === name);
}

function addOrUpdateGrade(name, subject, grade) {
    const student = findStudent(name);

    if (student) {
        console.log(`El estudiante ${name} ya existe.`);
        const subjects = student[1];
        subject = subject.toLowerCase(); 
        const subjectIndex = subjects.findIndex(s => s[0].toLowerCase() === subject);

        if (subjectIndex !== -1) {
            subjects[subjectIndex][1] = grade;
            console.log(`Nota actualizada: ${subjects[subjectIndex][0]} ahora tiene ${grade}.`);
        } else {
            subjects.push([capitalize(subject), grade]);
            console.log(`Materia agregada: ${capitalize(subject)} con nota ${grade}.`);
        }
    } else {
        students.push([capitalize(name), [[capitalize(subject), grade]]]);
        console.log(`Estudiante ${capitalize(name)} agregado con la materia ${capitalize(subject)} y nota ${grade}.`);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function main() {
    const prompt = require('prompt-sync')();

    while (true) {
        console.log("\nSistema de Gestión de Calificaciones");
        console.log("1. Agregar o actualizar calificación");
        console.log("2. Mostrar lista de estudiantes");
        console.log("3. Salir");
        const option = prompt("Elige una opción: ");

        if (option === "1") {
            const name = prompt("Ingresa el nombre del estudiante: ");
            const subject = prompt("Ingresa la materia: ");
            const grade = parseInt(prompt("Ingresa la calificación: "), 10);
            addOrUpdateGrade(name, subject, grade);
        } else if (option === "2") {
            console.log("\nLista de estudiantes:");
            students.forEach(student => {
                console.log(`${student[0]}: ${JSON.stringify(student[1])}`);
            });
        } else if (option === "3") {
            console.log("Saliendo del sistema...");
            break;
        } else {
            console.log("Opción no válida. Intenta de nuevo.");
        }
    }
}


main();