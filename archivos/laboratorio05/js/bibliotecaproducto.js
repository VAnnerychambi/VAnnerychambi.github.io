//declarando variables para los controles
var txtNom= document.getElementById("txtNom");
var txtPre= document.getElementById("txtPre");
var cboCategoria= document.getElementById("cboCategoria");
var txtCan= document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");


// creamos un pocemiento para mostrar
function MostrarProducto() {
    //declarando una variable para guardar los datos 
    var listaproducto=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    //agregamos las columnas que se registren
    for (var i=0; i<listaproducto.length; i++){
        //declarando una variable para la fila 
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos 
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocategoria=fila.insertCell(2);
        var titulocantidad=fila.insertCell(3);
        //agregamos los valores
        titulonombre.innerHTML=listaproducto[i].nombre;
        tituloprecio.innerHTML=listaproducto[i].precio;
        titulocategoria.innerHTML=listaproducto[i].categoria;
        titulocantidad.innerHTML=listaproducto[i].cantidad;
        
        tbody.appendChild (fila);
    }
}

//creamos un procediento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var cat=cboCategoria.value;
    var can=txtCan.value;

    //llamamos al procedimiento Registrar
    Registrar(nom,pre,cat,can);
    MostrarProducto();
}

btnRegistrar.addEventListener("click",RegistrarDatos);


// V A L I D A R --------------------------------------
function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}

//creamos la funcion validar
function Validar(){
    //reiniciamos el error para  que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese el nombre del producto");
        LlamarClase("Por favoe ingrese el precio del producto");
        LlamarClase("Por favor ingrese la categoria del producto");
        LlamarClase("Por favor ingrese la cantidad de productos");
    }else if (txtPre.value=="" || txtPre.value==null){
        LlamarClase("Por favor ingrese el precio del producto");
        LlamarClase("Por favor ingrese la categoria del producto");
        LlamarClase("Por favor ingrese la cantidad de productos");
        txtPre.focus();
    }else if(cboCategoria=="" || cboCategoria==null){
        LlamarClase("Por favor ingrese la categoria del producto");
        LlamarClase("Por favor ingrese la cantidad de productos");
        cboCategoria.focus();
    }else if(txtCan.value=="" || txtCan.value==null){
        LlamarClase("Por favor ingrese la cantidad de productos");
        txtCan.focus();
    }else{
        error.style.display='none';
    }
}