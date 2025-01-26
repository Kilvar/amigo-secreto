// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let campoTexto = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    if (campoTexto.value == "") {
        alert("Por favor, ingrese un nombre válido");
    }
    else {
        nombresAmigos.push(campoTexto.value);
        actualizarListaAmigos(campoTexto.value)
        campoTexto.value = "";
        console.log(nombresAmigos);
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
        listaAmigos.remove();
        let amigo = Math.floor(Math.random() * nombresAmigos.length);
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${nombresAmigos[amigo]}`
    }


}