//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

function adicionarAmigo(){
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if(nome !== ""){
        amigos.push(nome);
        console.log(nome);
        console.log(amigos);
        inputNome.value = "";
        
    }else{
        alert("Por favor, insira um nome.");
    }
}
