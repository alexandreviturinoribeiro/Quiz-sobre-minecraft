const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de renascer em um mundo novo de Minecraft totalmente desconhecido. O sol já começa a se mover no céu e você precisa se preparar. Qual é sua primeira ação?",
        alternativas: [
            {
                texto: "Correr imediatamente para dar soco em árvores e coletar madeira.",
                afirmacao: "Focou desde o início em obter recursos essenciais para construir suas primeiras ferramentas rapidamente."
            },
            {
                texto: "Explorar o mapa em busca de uma vila de vilaios já pronta para se abrigar.",
                afirmacao: "Preferiu arriscar a sorte explorando o terreno em busca de abrigo e recursos prontos."
            }
        ]
    },
    {
        enunciado: "O sol começou a se pôr e a noite se aproxima. Você escuta barulhos de monstros ao longe. O que você faz para passar a noite com segurança?",
        alternativas: [
            {
                texto: "Cavar um buraco na terra e se trancar até o dia clarear.",
                afirmacao: "Optou por uma estratégia cautelosa para garantir sua sobrevivência sem correr riscos desnecessários."
            },
            {
                texto: "Construir uma espada de madeira/pedra e ir caçar monstros pela experiência.",
                afirmacao: "Mostrou coragem e espírito combatente ao enfrentar os perigos da noite diretamente."
            }
        ]
    },
    {
        enunciado: "No dia seguinte, você encontra a entrada de uma caverna profunda e escura, cheia de minérios aparentes. Como você aborda essa exploração?",
        alternativas: [
            {
                texto: "Entra direto com poucas tochas, confiando na sua habilidade de esquiva.",
                afirmacao: "Agiu com impulsividade e adrenalina ao explorar cavernas perigosas sem muito preparo."
            },
            {
                texto: "Volta para a base, produz bastante comida, tochas e armaduras antes de descer.",
                afirmacao: "Demonstrou planejamento tático e paciência para explorar minas com segurança total."
            }
        ]
    },
    {
        enunciado: "Durante sua mineração nas profundezas, você encontra diamantes perto de um lago de lava! Como você decide coletá-los?",
        alternativas: [
            {
                texto: "Coloca um balde de água sobre a lava para transformá-la em obsidiana antes de minerar.",
                afirmacao: "Usou técnicas inteligentes do jogo para proteger itens valiosos contra acidentes."
            },
            {
                texto: "Minera rapidamente os blocos torcendo para o diamante não cair no fogo.",
                afirmacao: "Preferiu a velocidade ao invés da cautela na hora de pegar recompensas valiosas."
            }
        ]
    },
    {
        enunciado: "Com equipamentos de diamante prontos, seus amigos chamam você para fazer o portal do Nether e tentar zerar o jogo derrotando o Ender Dragon. O que você decide?",
        alternativas: [
            {
                texto: "Aceitar o desafio imediatamente e liderar o ataque ao dragão.",
                afirmacao: "Tornou-se um grande herói e lendário explorador do End no seu servidor."
            },
            {
                texto: "Preferir ficar no mundo normal construindo uma mega base decorada e fazendas automáticas.",
                afirmacao: "Consolidou-se como um construtor mestre, criando estruturas incríveis e sustentáveis."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo da sua jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
