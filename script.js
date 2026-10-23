// ============================================
// Aventura do Saber - lógica do jogo
// ============================================

// ---------- VARIÁVEIS DO JOGO ----------
var perguntaAtual = 0;        // número da pergunta que a criança está respondendo
var acertos = 0;              // quantas estrelas a criança ganhou
var resultados = [];          // guarda "acertou" ou "errou" de cada pergunta
var ordemAlternativas = [];   // ordem embaralhada das alternativas

var letras = ["A", "B", "C"];


// ---------- FUNÇÕES AUXILIARES ----------

// Mostra uma tela e esconde todas as outras
function mostrarTela(idDaTela) {
  var telas = document.querySelectorAll(".tela");

  for (var i = 0; i < telas.length; i++) {
    telas[i].classList.remove("ativa");
  }

  document.getElementById(idDaTela).classList.add("ativa");
  window.scrollTo(0, 0);
}

// Embaralha uma lista (algoritmo de Fisher-Yates)
function embaralhar(lista) {
  for (var i = lista.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temporario = lista[i];
    lista[i] = lista[j];
    lista[j] = temporario;
  }
  return lista;
}


// ---------- INÍCIO DO JOGO ----------

function iniciarJogo() {
  perguntaAtual = 0;
  acertos = 0;
  resultados = [];
  mostrarPergunta();
}


// ---------- MOSTRAR A PERGUNTA ----------

function mostrarPergunta() {
  var pergunta = perguntas[perguntaAtual];
  var total = perguntas.length;

  // Atualiza o texto, a imagem e o contador
  document.getElementById("texto-pergunta").textContent = pergunta.texto;
  document.getElementById("imagem-pergunta").textContent = pergunta.imagem;
  document.getElementById("contador").textContent =
    "Pergunta " + (perguntaAtual + 1) + " de " + total;

  // Atualiza a barra de progresso
  var porcentagem = ((perguntaAtual + 1) / total) * 100;
  document.getElementById("barra-preenchida").style.width = porcentagem + "%";

  // Embaralha a ordem das alternativas (0, 1 e 2 em ordem aleatória)
  ordemAlternativas = embaralhar([0, 1, 2]);

  // Limpa as alternativas da pergunta anterior
  var caixa = document.getElementById("alternativas");
  caixa.innerHTML = "";

  // Cria um botão para cada alternativa
  for (var i = 0; i < ordemAlternativas.length; i++) {
    var indice = ordemAlternativas[i];
    var alternativa = pergunta.alternativas[indice];

    var botao = document.createElement("button");
    botao.className = "alternativa";
    botao.innerHTML =
      '<span class="emoji">' + alternativa.emoji + "</span>" +
      '<span class="letra-texto">' + letras[i] + ". " + alternativa.texto + "</span>";

    // Quando clicar, chama escolherResposta() passando o índice original
    botao.onclick = criarCliqueDaAlternativa(indice);

    caixa.appendChild(botao);
  }

  mostrarTela("tela-pergunta");
}

// Função que devolve o "onclick" de cada botão
// (precisa ser separada por causa do loop acima)
function criarCliqueDaAlternativa(indice) {
  return function () {
    escolherResposta(indice);
  };
}


// ---------- LER A PERGUNTA EM VOZ ALTA ----------

function lerPergunta() {
  // Só funciona em navegadores que têm síntese de voz
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    var fala = new SpeechSynthesisUtterance(perguntas[perguntaAtual].texto);
    fala.lang = "pt-BR";
    fala.rate = 0.85; // um pouco mais devagar para as crianças
    window.speechSynthesis.speak(fala);
  }
}


// ---------- VERIFICAR A RESPOSTA ----------

function escolherResposta(indiceEscolhido) {
  // Para a leitura de voz, se estiver falando
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  var respostaCerta = perguntas[perguntaAtual].correta;

  if (indiceEscolhido === respostaCerta) {
    acertos = acertos + 1;
    resultados.push("acertou");
    mostrarTela("tela-acerto");
  } else {
    resultados.push("errou");
    mostrarTela("tela-erro");
  }
}


// ---------- PRÓXIMA PERGUNTA ----------

function proximaPergunta() {
  perguntaAtual = perguntaAtual + 1;

  if (perguntaAtual >= perguntas.length) {
    // Acabaram as perguntas
    mostrarFinal();
  } else if (perguntaAtual % 10 === 0) {
    // A cada 10 perguntas mostra o progresso (10 e 20)
    mostrarProgresso();
  } else {
    mostrarPergunta();
  }
}


// ---------- TELA DE PROGRESSO ----------

function mostrarProgresso() {
  var total = perguntas.length;
  var lista = document.getElementById("lista-estrelas");
  lista.innerHTML = "";

  // Cria uma estrela para cada pergunta do jogo
  for (var i = 0; i < total; i++) {
    var estrela = document.createElement("div");

    if (i < acertos) {
      estrela.className = "estrela dourada";
      estrela.textContent = "⭐";
    } else {
      estrela.className = "estrela";
      estrela.textContent = "☆";
    }

    lista.appendChild(estrela);
  }

  document.getElementById("barra-progresso").style.width =
    (perguntaAtual / total) * 100 + "%";
  document.getElementById("texto-progresso").textContent =
    "Você já respondeu " + perguntaAtual + " de " + total + " perguntas!";

  mostrarTela("tela-progresso");
}

function continuarJogando() {
  mostrarPergunta();
}


// ---------- TELA FINAL ----------

function mostrarFinal() {
  document.getElementById("texto-final").textContent =
    "⭐ Você conseguiu " + acertos + " de " + perguntas.length + " estrelas!";
  mostrarTela("tela-final");
}


// ---------- GABARITO ----------

function montarGabarito() {
  var lista = document.getElementById("lista-gabarito");
  lista.innerHTML = "";

  for (var i = 0; i < perguntas.length; i++) {
    var pergunta = perguntas[i];
    var respostaCerta = pergunta.alternativas[pergunta.correta].texto;

    // Se acertou mostra ✅, se errou mostra ✖ vermelho
    var marca = "";
    if (resultados[i] === "acertou") {
      marca = "✅";
    } else if (resultados[i] === "errou") {
      marca = '<span class="x-vermelho">✖</span>';
    }

    var linha = document.createElement("div");
    linha.className = "linha-gabarito";
    linha.innerHTML =
      '<span class="numero">' + (i + 1) + ".</span>" +
      '<span class="pergunta">' + pergunta.texto + "</span>" +
      '<span class="resposta">' + respostaCerta + "</span>" +
      "<span>" + marca + "</span>";

    lista.appendChild(linha);
  }
}
