//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0;i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function adicionarAmigo(){
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if(nome !== ""){
        amigos.push(nome);
        atualizarLista();
        inputNome.value = "";
        
    }else{
        alert("Por favor, insira um nome.");
    }
}

function sortearAmigo(){

    if(amigos.length === 0){
        alert("Nenhum amigo disponível");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);

    const sorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = "Amigo Sorteado: "+ sorteado;
}

