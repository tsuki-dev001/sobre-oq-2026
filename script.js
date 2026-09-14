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
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa ();
    
}
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado ();
        return;
    }
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enuncia;
caixaAlternativa.textContent = " ";
mostraAlternativa ();
}

function mostraAlternativa(){
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativa = document.createElement("button");
botaoAlternativa.textContent = alternativa.texto;
botaoAlternativa.addEventListener("click", function (){
atual++;
mostraPergunta();
})
}
}
function respostasSelecionadas (opçaoSelecionada){
    const afirmacoes = opçaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
function mostraResultado() {

}