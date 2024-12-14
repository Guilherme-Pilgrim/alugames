function alterarStatus(id) {
    let game = document.getElementById('game-' + id);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nomeJogo = game.querySelector('.dashboard__item__name')

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'
        imagem.classList.remove('dashboard__item__img--rented');

        alert(`${nomeJogo.textContent} foi devolvido!`);
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        imagem.classList.add('dashboard__item__img--rented');

        alert(`${nomeJogo.textContent} foi alugado!`);
    }
}