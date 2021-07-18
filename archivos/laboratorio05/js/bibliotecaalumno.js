//declarando variables para los controles
var txtNom= document.getElementById("txtNom");
var txtApe= document.getElementById("txtApe");
var txtDNI= document.getElementById("txtDNI");
var cboCurso= document.getElementById("cboCurso");
var rbM= document.getElementById("rbM");
var rbT= document.getElementById("rbT");
var rbN= document.getElementById("rbN");
var chkEst= document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");


// creamos un pocemiento para mostrar
function MostrarAlumno() {
    //declarando una variable para guardar los datos 
    var listaalumno=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //agregamos las columnas que se registren
    for (var i=0; i<listaalumno.length; i++){
        //declarando una variable para la fila 
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos 
        var titulonombre=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocurso=fila.insertCell(3);
        var tituloturno=fila.insertCell(4);
        var tituloestado=fila.insertCell(5);
        //agregamos los valores
        titulonombre.innerHTML=listaalumno[i].nombre;
        tituloapellido.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocurso.innerHTML=listaalumno[i].curso;
        tituloturno.innerHTML=listaalumno[i].turno;
        tituloestado.innerHTML=listaalumno[i].estado;
        
        tbody.appendChild (fila);
    }
}

//creamos un procediento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDNI.value;
    var cur=cboCurso.value;
    var est=chkEst.value;
    //llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,est);
    MostrarAlumno();
}

btnRegistrar.addEventListener("click",RegistrarDatos);


// V A L I D A R ------------------------------------------------
function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}
function Validar(){
    error.innerHTML='';
    if(txtNom=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su DNI");
        LlamarClase("Por favor ingrese el curso");
        LlamarClase("Por favor ingrese el turno");
        LlamarClase("Por favor ingrese su estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su DNI");
        LlamarClase("Por favor ingrese el curso");
        LlamarClase("Por favor ingrese el turno");
        LlamarClase("Por favor ingrese su estado");
        txtApe.focus();
    }else if (txtDNI.value=="" || txtDNI.value==null){
        LlamarClase("Por favor ingrese su DNI");
        LlamarClase("Por favor ingrese el curso");
        LlamarClase("Por favor ingrese el turno");
        LlamarClase("Por favor ingrese su estado");
        txtDNI.focus();
    }else if (cboCurso.combo== false){
        LlamarClase("Por favor ingrese el curso");
        LlamarClase("Por favor ingrese el turno");
        LlamarClase("Por favor ingrese su estado");
        cboCurso.focus();
    }else if (rbM.checked==false && rbT.checked==false && rbN.checked==false){
        LlamarClase("Por favor ingrese el turno");
        LlamarClase("Por favor ingrese su estado");
        rbM.focus();
    }else if(chkEst.checked== false){
        LlamarClase("Por favor ingrese su estado");
        chkEst.focus();
    }else{
        error.style.display='none';
    }
}