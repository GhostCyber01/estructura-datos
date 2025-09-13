 const resultado = document.getElementById("txtresultado");
function mensaje(texto){
    console.log(texto);
    alert (texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto
}

mensaje("hola mundo");

function agregar(palabra){
    resultado.textContent = palabra;

}

function modificar(palabra){

}

function borrar(palabra){

}

function mostrar(palabra){

}

const btnagregar = document.getElementById("btnagregar");

const btnmodificar = document.getElementById("btnmodificar");

const btneborrar = document.getElementById("btneborrar");

const btnmostrar = document.getElementById("btnmostrar");

btnagregar.addEventListener("click", agregar("klk"));

btnmodificar.addEventListener("click", modificar("klk"));

btneborrar.addEventListener("click", borrar("klk"));

btnmostrar.addEventListener("click", mostrar("klk"));   

