//declarando variables para los controles
var txtNom= document.getElementById("txtNom");
var txtApe= document.getElementById("txtApe");
var txtCor= document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un pocemiento para mostrar
function MostrarRegistro() {
    //declarando una variable para guardar los datos 
    var listaregistro=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //agregamos las columnas que se registren
    for (var i=0; i<listaregistro.length; i++){
        //declarando una variable para la fila 
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos 
        var titulonombre=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulocorreo=fila.insertCell(2);
        //agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloapellido.innerHTML=listaregistro[i].apellido;
        titulocorreo.innerHTML=listaregistro[i].correo;
        tbody.appendChild (fila);
    }
}

//creamos un procediento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //llamamos al procedimiento Registrar
    Registrar(nom,ape,cor);
    MostrarRegistro();
}

//agreagamos un evento al boton
//btnRegistrar.addEventListener("click",function(){
//    alert("Hola");
//});

//creamos un procedimiento para el mensaje
//function Mansaje(){
//    alert("Hola");
//}
//agreagmos el evento al boton
//btnRegistrar.addEventListener("click",Mensaje);


//Asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);