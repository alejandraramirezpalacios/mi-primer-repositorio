const formularioContacto = document.getElementById('formularioContacto');

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

formularioContacto.addEventListener('submit', function(){
    alert('Enviaste el formulario');
});