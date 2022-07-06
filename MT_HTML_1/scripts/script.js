let nombre, correo, mensaje;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarDatos(nombre, correo, mensaje)
    guardarLocalStorage(nombre, correo, mensaje)
}

function ValidarDatos (nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Error", "Espacios en blanco", "error");
    }
}

function guardarLocalStorage(nombre,correo,mensaje){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
    ListarDatos
}

function ListarDatos(params){
    let nombreUsu = localStorage.getItem('Nombre')
    let CorreoUsu = localStorage.getItem('Correo')
    let MensajeUsu = localStorage.getItem('Mensaje')
    
}