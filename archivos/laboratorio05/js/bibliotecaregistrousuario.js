var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//creamos un procedimiento para registrar
function Registrar(){
    if(txtCor.value==""||txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value==""||txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        //capturandovalores
        var cor=txtCor.value;
        var con=txtCon.value;
        //llamando al codigo de firebase para registrar
        auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Se registro el usuario");
    Limpiar();
  })
  .catch((error) => {
    alert("No se registro el usuario");
    Limpiar();
  });
    }
}

//asignamos un procedimiento al boton
btnRegistrar.addEventListener("click",Registrar);

