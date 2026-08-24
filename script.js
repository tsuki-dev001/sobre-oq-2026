const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaResultado = document.querySelector('.texto-resultado');
const listsa = [item1, item2]
const perguntas = {
tamanho: 20,
tipo 'HB',
cor: 'grafite',
temBorrachaAtras: false
}
const perguntas = [
{
enunciado: "Silent Hill f se passa na mesma cidade dos EUA que dá nome aos jogos anteriores da franquia.",
Alternativas: [
"falso",
"verdadeiro"
] ,

},
{
enunciado: "A história do jogo foi escrita por Ryukishi07, criador das visuais novels Higurashi e Umineko.",
Alternativas: [
"falso",
"verdadeiro"
],
},
,
{
enunciado: "PerAo contrário dos jogos clássicos, a protagonista Hinako carrega uma lanterna e um rádio que chia com a aproximação de monstros.gunta2",
Alternativas: [
"falso",
"verdadeiro"
],
},
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaatual = pergunta [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    
}
mostraPergunta();
