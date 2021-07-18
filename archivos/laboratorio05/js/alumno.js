// creamos un vector para el producto
var alumno=[];
// Creamos un procedimiento para registrar
// categoria se va a registrar de un combobox -> select
// categoria: Entretenimiento, Tecnologia, Linea Blanca
function Registrar (nombrealumno, apellidoalumno, dnialumno, cursoalumno, turnoalumno,estadoalumno){
    var NuevoAlumno={
        nombre:nombrealumno,
        apellido:apellidoalumno,
        dni:dnialumno,
        curso:cursoalumno,
        turno:turnoalumno,
        estado:estadoalumno,
    };
    alumno.push(NuevoAlumno);
}
// Creamos una funcion para obtener los valores del registro
function Mostrar(){
    return alumno;
}