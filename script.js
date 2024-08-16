const btLifeSync = document.getElementById('botao-lifesync');
const conteudoLifeSync = document.getElementById('projeto-lifesync');
const btBookstoreApp = document.getElementById('botao-bookstore');
const conteudoBookstoreApp = document.getElementById('projeto-bookstore');
const btAtendimentosApp = document.getElementById('botao-atendimentosapp');
const conteudoAtendimentosApp = document.getElementById('projeto-atendimentosapp');
const btFipe = document.getElementById('botao-fipe');
const conteudoFipe = document.getElementById('projeto-fipe');
const btCde = document.getElementById('botao-cde');
const conteudoCde = document.getElementById('projeto-cde');
const btTaskPlus = document.getElementById('botao-taskplus');

const conteudoTaskPlus = document.getElementById('projeto-taskplus');

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

btFipe.addEventListener('click', () => {
    conteudoFipe.classList.toggle("hide");
    conteudoFipe.classList.toggle("projetos__container-conteudo");
});

btCde.addEventListener('click', () => {
    conteudoCde.classList.toggle("hide");
    conteudoCde.classList.toggle("projetos__container-conteudo");
});

btTaskPlus.addEventListener('click', () => {
    conteudoTaskPlus.classList.toggle("hide");
    conteudoTaskPlus.classList.toggle("projetos__container-conteudo");
});
