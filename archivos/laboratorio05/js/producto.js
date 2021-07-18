//creamos un vector para elproducto
var producto=[];
//Creamos un procedimiento para registrar
//la categoria se va a registrar de un Combobox --> selwct
// categoria: Entretenimiento , tecnologia, linea blanca
function Registrar (nomproducto,preproducto,catproducto, canproducto){
    var NuevoProducto={
        nombre: nomproducto,
        precio: preproducto,
        categoria: catproducto,
        cantidad: canproducto,

    };
    producto.push(NuevoProducto);
}

//creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
}