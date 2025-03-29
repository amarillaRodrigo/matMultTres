students = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
]


def find_student(name):
    name = name.lower()  
    for student in students:
        if student[0].lower() == name:  
            return student
    return None

def add_or_update_grade(name, subject, grade):
    student = find_student(name)

    if student:
        print(f"El estudiante {name} ya existe.")
        subjects = student[1]
        subject = subject.lower()
        for s in subjects:
            if s[0].lower() == subject:
                s[1] = grade
                print(f"Nota actualizada: {s[0]} ahora tiene {grade}.")
                return
        subjects.append([subject.capitalize(), grade])
        print(f"Materia agregada: {subject.capitalize()} con nota {grade}.")
    else:
        students.append([name, [[subject.capitalize(), grade]]])
        print(f"Estudiante {name} agregado con la materia {subject.capitalize()} y nota {grade}.")

def main():
    while True:
        print("\nSistema de Gestión de Calificaciones")
        print("1. Agregar o actualizar calificación")
        print("2. Mostrar lista de estudiantes")
        print("3. Salir")
        option = input("Elige una opción: ")

        if option == "1":
            name = input("Ingresa el nombre del estudiante: ")
            subject = input("Ingresa la materia: ")
            grade = int(input("Ingresa la calificación: "))
            add_or_update_grade(name, subject, grade)
        elif option == "2":
            print("\nLista de estudiantes:")
            for student in students:
                print(f"{student[0]}: {student[1]}")
        elif option == "3":
            print("Saliendo del sistema...")
            break
        else:
            print("Opción no válida. Intenta de nuevo.")


if __name__ == "__main__":
    main()