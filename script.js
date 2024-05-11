const btLifeSync = document.getElementById('botao-lifesync');
const conteudoLifeSync = document.getElementById('projeto-lifesync');
const btBookstoreApp = document.getElementById('botao-bookstore');
const conteudoBookstoreApp = document.getElementById('projeto-bookstore');
const btAtendimentosApp = document.getElementById('botao-atendimentosapp');
const conteudoAtendimentosApp = document.getElementById('projeto-atendimentosapp');
const btBank = document.getElementById('botao-bank');
const conteudoBank = document.getElementById('projeto-bank');
const btFipe = document.getElementById('botao-fipe');
const conteudoFipe = document.getElementById('projeto-fipe');

btLifeSync.addEventListener('click', () => {
    conteudoLifeSync.classList.toggle("hide");
    conteudoLifeSync.classList.toggle("projetos__container-conteudo");
  });

btBookstoreApp.addEventListener('click', () => {
    conteudoBookstoreApp.classList.toggle("hide");
    conteudoBookstoreApp.classList.toggle("projetos__container-conteudo");
});

btAtendimentosApp.addEventListener('click', () => {
    conteudoAtendimentosApp.classList.toggle("hide");
    conteudoAtendimentosApp.classList.toggle("projetos__container-conteudo");
    
});

btBank.addEventListener('click', () => {
    conteudoBank.classList.toggle("hide");
    conteudoBank.classList.toggle("projetos__container-conteudo");
});

btFipe.addEventListener('click', () => {
    conteudoFipe.classList.toggle("hide");
    conteudoFipe.classList.toggle("projetos__container-conteudo");
});