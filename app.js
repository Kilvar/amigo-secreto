// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let campoTexto = elementoId('amigo');
let listaAmigos = elementoId('listaAmigos');
let botonSorteo = elementoId('botonSorteo');
let botonAgregar = elementoId('botonAgregar');

function agregarAmigo() {
    if (campoTexto.value == "") {
        alert("Por favor, ingrese un nombre válido");
    }
    else {
        nombresAmigos.push(campoTexto.value);
        actualizarListaAmigos(campoTexto.value)
        campoTexto.value = "";
        //console.log(nombresAmigos);
    }
}

function actualizarListaAmigos(nombre) {
    let elementoLista = document.createElement("li");
    let valor = document.createTextNode(nombre);

    elementoLista.appendChild(valor);
    listaAmigos.appendChild(elementoLista);
}

function sortearAmigo() {
    if (nombresAmigos.length == 0) {
        alert("Ingresa amigos para sortear!");
    }
    else {
        let amigo = Math.floor(Math.random() * nombresAmigos.length);
        elementoId('resultado').innerHTML = `El amigo secreto sorteado es: ${nombresAmigos[amigo]}`;

        listaAmigos.innerHTML = "";
        document.querySelector("#botonSorteo span").innerHTML = "Reiniciar sorteo";
        botonAgregar.disabled = true;
        botonSorteo.onclick = reiniciarSorteo;
    }
}

function elementoId(elemento) {
    return document.getElementById(elemento);
}

function reiniciarSorteo() {
    nombresAmigos = [];
    elementoId('resultado').innerHTML = "";
    document.querySelector("#botonSorteo span").innerHTML = "Sortear amigo";
    botonSorteo.onclick = sortearAmigo;
    botonAgregar.disabled = false;

}