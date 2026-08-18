const semaforo = document.getElementById('semaforo');
const luzVermelha = document.getElementById('luz-vermelha');
const luzAmarela = document.getElementById('luz-amarela');
const luzVerde = document.getElementById('luz-verde');

const btnVermelho = document.getElementById('btn-vermelho');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnVerde = document.getElementById('btn-verde');

btnVermelho.addEventListener('click', function () {
    luzVermelha.classList.add('acesa-vermelha')
    luzVermelha.classList.remove('acesa-amarela')
    luzVermelha.classList.remove('acesa-verde')

})

btnAmarelo.addEventListener('click', function () {
    luzVermelha.classList.remove('acesa-vermelha')
    luzVermelha.classList.add('acesa-amarela')
    luzVermelha.classList.remove('acesa-verde')

})

btnVerde.addEventListener('click', function () {
    luzVermelha.classList.remove('acesa-vermelha')
    luzVermelha.classList.remove('acesa-amarela')
    luzVermelha.classList.add('acesa-verde')
})