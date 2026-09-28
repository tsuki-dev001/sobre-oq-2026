const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
[
  {
    "enunciado": "Assim que sai da escola, a névoa espessa toma conta da pacata vila de Ebisugaoka no Japão dos anos 1960. As ruas parecem transformadas, e belas porém perturbadoras flores vermelhas (Lírios da Ressurreição) começam a brotar das paredes e das fendas do asfalto. Qual o seu primeiro pensamento?",
    "alternativas": [
      {
        "texto": "Isso é aterrorizante! Preciso achar um lugar seguro e me esconder imediatamente.",
        "afirmacao": "afirmacao"
      },
      {
        "texto": "Isso é fascinante e misterioso! Preciso explorar para entender o que está acontecendo com a vila.",
        "afirmacao": "afirmacao"
      }
    ]
  },
  {
    "enunciado": "Avançando pelas ruas desertas, você encontra seu primeiro monstro disforme coberto de plantas e gavinhas. Ao seu lado no chão, há um cano de ferro enferrujado e, mais adiante, uma viela escura que pode ser uma rota de fuga. Qual atitude você toma?",
    "alternativas": [
      {
        "texto": "Pega o cano de ferro e enfrenta a criatura para abrir caminho à força.",
        "afirmacao": "afirmacao"
      },
      {
        "texto": "Evita o confronto, usa o ambiente para se esgueirar e foge pela viela sem gastar recursos.",
        "afirmacao": "afirmacao"
      }
    ]
  },
  {
    "enunciado": "Ao se abrigar em um santuário Shinto abandonedo, você encontra um jovem misterioso usando uma máscara de raposa (Kitsune). Ele fala de forma enigmática sobre as tradições da vila, culpa e sacrifícios, e oferece conselhos sobre como sobreviver ao 'Outro Mundo'. Nesse diálogo, como você se posiciona?",
    "alternativas": [
      {
        "texto": "Desconfia das intenções dele, acreditando que ele faz parte do culto ou da maldição que assola a vila.",
        "afirmacao": "afirmacao"
      },
      {
        "texto": "Aceita a orientação dele, acreditando que a sabedoria ancestral e os rituais são a única chave para escapar.",
        "afirmacao": "afirmacao"
      }
    ]
  },
  {
    "enunciado": "Explorando uma casa tradicional japonesa em ruínas, você encontra uma sala trancada com um enigma envolvendo espelhos, bonecas tradicionais (Hina) e versos de um poema assustador escrito em um pergaminho. Como você resolve a situação?",
    "alternativas": [
      {
        "texto": "Examina minuciosamente os detalhes dos objetos e lê os pergaminhos com calma para deduzir a lógica do enigma.",
        "afirmacao": "afirmacao"
      },
      {
        "texto": "Procura por passagens secretas ou uma forma física de arrombar a porta para não perder tempo com charadas.",
        "afirmacao": "afirmacao"
      }
    ]
  },
  {
    "enunciado": "No clímax da jornada, você descobre um segredo doloroso sobre o passado da sua família e a pressão social da vila. O jogo oferece a chance de aceitar o destino imposto a você para salvar a cidade ou rebelar-se contra as tradições e quebrar o ciclo, mesmo sem saber as consequências. O que você faz?",
    "alternativas": [
      {
        "texto": "Rebela-se contra as tradições e a opressão, priorizando a sua própria liberdade e verdade individual.",
        "afirmacao": "afirmacao"
      },
      {
        "texto": "Aceita o fardo e o sacrifício em nome da tradição e da proteção daqueles que você ama.",
        "afirmacao": "afirmacao"
      }
    ]
  }
]

}
]
,
;

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