
const botaoMostrarJogos = document.querySelector('.btn-mostrar-jogos');
const jogosInativos = document.querySelectorAll('.jogo:not(.ativo)');

botaoMostrarJogos.addEventListener('click', () => {
    mostrarMaisJogos();
    esconderBotao();

})
function esconderBotao() {
    botaoMostrarJogos.classList.add("remover");
}
function mostrarMaisJogos() {
    jogosInativos.forEach(jogoInativo => {
        jogoInativo.classList.add('ativo');
    });
}

