let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = ' bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}