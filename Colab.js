var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var edad = document.getElementById('edad');
var correo = document.getElementById('correo');
var contraseña = document.getElementById('contraseña');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('enviando formulario');

    var mensajeError=[];
    
    if (nombre.value === null || nombre.value==='' ){
        alert('Debes rrellenar todos los campos')
    }
    else if (apellido.value === null || apellido.value===''  ){
        alert('Debes rrellenar todos los campos')
    }
    else if ( edad.value === null || edad.value===''  ){
       alert('Debes rrellenar todos los campos')
    }
    else if (correo.value === null || correo.value==='' ){
        alert('Debes rrellenar todos los campos')
    }
    else if ( contraseña.value === null || contraseña.value===''  ){
        alert('Debes rrellenar todos los campos')
       
    }
   
    error.innerHTML = mensajeError.join(' , ');
    return false;
}