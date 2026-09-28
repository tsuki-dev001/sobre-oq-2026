conconst caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "O que realmente é a névoa e o "Outro Mundo" em Silent Hill?",
alternativas: [
{
texto: "Uma energia espiritual antiga da cidade que foi corrompida por rituais de um culto obscuro.",
afirmacao: ["afirmacao"]
},
{
texto: "A projeção física do trauma, da culpa e dos pesadelos reprimidos da mente do protagonista.",
afirmacao: ["afirmacao"]
}

]
},
{
enunciado: "Por que os monstros da cidade possuem aparências tão grotescas e deformadas?",
alternativas: [
{
texto:"São criaturas mágicas geradas pela força sobrenatural e mística que domina a cidade.",
afirmacao:["afirmacao"]
},
{
texto: "São personificações dos desejos reprimidos, traumas e sentimentos de culpa de quem está lá.",
afirmacao:["afirmacao"]
}
]
},
{
enunciado: "O que faz uma pessoa parar na cidade de Silent Hill?",
alternativas: [
{
texto:"A própria cidade atrai ativamente pessoas que carregam segredos sombrios e almas atormentadas.",
afirmacao:["afirmacao"]
},
{
texto:"DO inconsciente da própria pessoa a guia até lá em uma busca desesperada por punição ou respostas.",
afirmacao:["afirmacao"]
}

]
},
{
enunciado: "Qual é a função do rádio quebrado emitir chiados quando um monstro se aproxima?",
alternativas: [
{
texto:"Detectar a interferência magnética e espiritual causada pela presença das criaturas no ambiente.",
afirmacao:["afirmacao"]
},
{
texto:"Criar ansiedade e terror psicológico ao avisar que o perigo está próximo, mesmo sem poder vê-lo na névoa.",
afirmacao:["afirmacao"]
}

]
},
{
enunciado: " Uma pessoa consegue escapar de Silent Hill após entrar lá?",
alternativas: [
{
texto: "Sim, é possível sobreviver e ir embora da cidade dependendo das decisões tomadas ao longo do caminho.",
afirmacao:["afirmacao"]
},
{
texto: "Fisicamente sim, mas psicologicamente não; se o trauma não for superado, a mente da pessoa continua presa para sempre.",
afirmacao:["afirmacao"]
}


]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
if(atual >= perguntas.length){
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada){
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}

function mostraResultado(){
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
