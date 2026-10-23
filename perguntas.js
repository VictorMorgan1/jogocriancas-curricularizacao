// ============================================
// Perguntas do jogo "Aventura do Saber"
// Fonte: documento "Jogo Pedagógico - Aventura do Saber"
//
// Cada pergunta é um objeto com:
//   texto        -> a pergunta que aparece na tela
//   imagem       -> emojis que ilustram a pergunta
//   alternativas -> lista com 3 opções (emoji + texto)
//   correta      -> posição da resposta certa na lista
//                   (0 = primeira, 1 = segunda, 2 = terceira)
//
// Obs: o JavaScript embaralha as alternativas a cada jogo,
// por isso a resposta certa não fica sempre na letra A.
// ============================================

var perguntas = [
  // Pergunta 1
  {
    texto: "Qual é o maior: elefante ou rato?",
    imagem: "🐘 🐭",
    alternativas: [
      { emoji: "🐘", texto: "Elefante" },
      { emoji: "🐭", texto: "Rato" },
      { emoji: "🟰", texto: "Os dois têm o mesmo tamanho" }
    ],
    correta: 0
  },

  // Pergunta 2
  {
    texto: "Qual objeto é mais comprido?",
    imagem: "📏 🧽",
    alternativas: [
      { emoji: "📏", texto: "Uma régua grande" },
      { emoji: "🧽", texto: "Uma borracha pequena" },
      { emoji: "🟰", texto: "Os dois têm o mesmo comprimento" }
    ],
    correta: 0
  },

  // Pergunta 3
  {
    texto: "Qual copo parece ter mais água?",
    imagem: "🥛 🫗",
    alternativas: [
      { emoji: "🥛", texto: "O copo cheio" },
      { emoji: "🫗", texto: "O copo quase vazio" },
      { emoji: "🟰", texto: "Os dois têm a mesma quantidade" }
    ],
    correta: 0
  },

  // Pergunta 4
  {
    texto: "Observe a figura: a bola está em cima ou embaixo da mesa?",
    imagem: "⚽ 🟫🟫🟫",
    alternativas: [
      { emoji: "⬆️", texto: "Em cima" },
      { emoji: "⬇️", texto: "Embaixo" },
      { emoji: "📦", texto: "Dentro" }
    ],
    correta: 0
  },

  // Pergunta 5
  {
    texto: "Observe a figura: o gato está dentro ou fora da caixa?",
    imagem: "🐱 📦",
    alternativas: [
      { emoji: "📦", texto: "Dentro" },
      { emoji: "↗️", texto: "Fora" },
      { emoji: "⬆️", texto: "Em cima" }
    ],
    correta: 0
  },

  // Pergunta 6
  {
    texto: "Qual objeto está à direita da árvore?",
    imagem: "🌳 ➡️ ⚽",
    alternativas: [
      { emoji: "⚽", texto: "A bola" },
      { emoji: "🌸", texto: "A flor" },
      { emoji: "🚫", texto: "Nenhum objeto" }
    ],
    correta: 0
  },

  // Pergunta 7
  {
    texto: "Qual caminho leva até a casa?",
    imagem: "⬅️ 🏠 ➡️",
    alternativas: [
      { emoji: "➡️", texto: "O caminho da direita" },
      { emoji: "⬅️", texto: "O caminho da esquerda" },
      { emoji: "🚫", texto: "Nenhum caminho" }
    ],
    correta: 0
  },

  // Pergunta 8
  {
    texto: "Quantas estrelas aparecem no cartão?",
    imagem: "⭐⭐⭐⭐",
    alternativas: [
      { emoji: "4", texto: "4" },
      { emoji: "3", texto: "3" },
      { emoji: "5", texto: "5" }
    ],
    correta: 0
  },

  // Pergunta 9
  {
    texto: "Você tem 3 maçãs e ganha mais 1. Com quantas maçãs fica?",
    imagem: "🍎🍎🍎 + 🍎",
    alternativas: [
      { emoji: "4", texto: "4" },
      { emoji: "3", texto: "3" },
      { emoji: "5", texto: "5" }
    ],
    correta: 0
  },

  // Pergunta 10
  {
    texto: "Qual grupo tem mais bolas?",
    imagem: "🏀🏀 ⚖️ 🏀🏀🏀🏀",
    alternativas: [
      { emoji: "🏀🏀🏀🏀", texto: "O grupo com 4 bolas" },
      { emoji: "🏀🏀", texto: "O grupo com 2 bolas" },
      { emoji: "🟰", texto: "Os dois grupos têm a mesma quantidade" }
    ],
    correta: 0
  },

  // Pergunta 11
  {
    texto: "Qual número vem depois do 5?",
    imagem: "3 4 5 ❓",
    alternativas: [
      { emoji: "6", texto: "6" },
      { emoji: "4", texto: "4" },
      { emoji: "7", texto: "7" }
    ],
    correta: 0
  },

  // Pergunta 12
  {
    texto: "Qual é a cor do sol no desenho?",
    imagem: "☀️",
    alternativas: [
      { emoji: "🟡", texto: "Amarelo" },
      { emoji: "🔵", texto: "Azul" },
      { emoji: "🟢", texto: "Verde" }
    ],
    correta: 0
  },

  // Pergunta 13
  {
    texto: "Qual destes objetos é vermelho?",
    imagem: "🍎 🍌 🍃",
    alternativas: [
      { emoji: "🍎", texto: "Uma maçã vermelha" },
      { emoji: "🍌", texto: "Uma banana amarela" },
      { emoji: "🍃", texto: "Uma folha verde" }
    ],
    correta: 0
  },

  // Pergunta 14
  {
    texto: "Qual cor aparece quando misturamos azul e amarelo?",
    imagem: "🔵 + 🟡",
    alternativas: [
      { emoji: "🟢", texto: "Verde" },
      { emoji: "🔴", texto: "Vermelho" },
      { emoji: "🟣", texto: "Roxo" }
    ],
    correta: 0
  },

  // Pergunta 15
  {
    texto: "Onde o peixe vive?",
    imagem: "🐟",
    alternativas: [
      { emoji: "🌊", texto: "Na água" },
      { emoji: "🌳", texto: "Na árvore" },
      { emoji: "🏠", texto: "No telhado" }
    ],
    correta: 0
  },

  // Pergunta 16
  {
    texto: "Qual animal vive principalmente na floresta?",
    imagem: "🌴🌳🌴",
    alternativas: [
      { emoji: "🐒", texto: "Macaco" },
      { emoji: "🐟", texto: "Peixe" },
      { emoji: "🐔", texto: "Galinha" }
    ],
    correta: 0
  },

  // Pergunta 17
  {
    texto: "Que animal faz “miau”?",
    imagem: "🔊 miau!",
    alternativas: [
      { emoji: "🐱", texto: "Gato" },
      { emoji: "🐶", texto: "Cachorro" },
      { emoji: "🐮", texto: "Vaca" }
    ],
    correta: 0
  },

  // Pergunta 18
  {
    texto: "Que animal faz “au au”?",
    imagem: "🔊 au au!",
    alternativas: [
      { emoji: "🐶", texto: "Cachorro" },
      { emoji: "🐱", texto: "Gato" },
      { emoji: "🐮", texto: "Vaca" }
    ],
    correta: 0
  },

  // Pergunta 19
  {
    texto: "Qual palavra começa com o mesmo som de “bola”?",
    imagem: "⚽",
    alternativas: [
      { emoji: "👄", texto: "Boca" },
      { emoji: "🐱", texto: "Gato" },
      { emoji: "🍽️", texto: "Mesa" }
    ],
    correta: 0
  },

  // Pergunta 20
  {
    texto: "Qual palavra rima com “pato”?",
    imagem: "🦆",
    alternativas: [
      { emoji: "🐱", texto: "Gato" },
      { emoji: "🍽️", texto: "Mesa" },
      { emoji: "⚽", texto: "Bola" }
    ],
    correta: 0
  },

  // Pergunta 21
  {
    texto: "Qual palavra começa com o som de M?",
    imagem: "🔤 M",
    alternativas: [
      { emoji: "🧳", texto: "Mala" },
      { emoji: "🐸", texto: "Sapo" },
      { emoji: "⚽", texto: "Bola" }
    ],
    correta: 0
  },

  // Pergunta 22
  {
    texto: "Quantas partes (sílabas) tem a palavra “BO-LA”?",
    imagem: "⚽ BO-LA",
    alternativas: [
      { emoji: "2", texto: "2" },
      { emoji: "1", texto: "1" },
      { emoji: "3", texto: "3" }
    ],
    correta: 0
  },

  // Pergunta 23
  {
    texto: "Quantas sílabas tem a palavra “CA-SA”?",
    imagem: "🏠 CA-SA",
    alternativas: [
      { emoji: "2", texto: "2" },
      { emoji: "1", texto: "1" },
      { emoji: "3", texto: "3" }
    ],
    correta: 0
  },

  // Pergunta 24
  {
    texto: "Qual palavra tem mais sílabas?",
    imagem: "☀️ ⚖️ 🪑",
    alternativas: [
      { emoji: "🪑", texto: "CA-DEI-RA" },
      { emoji: "☀️", texto: "SOL" },
      { emoji: "🟰", texto: "As duas têm a mesma quantidade" }
    ],
    correta: 0
  },

  // Pergunta 25
  {
    texto: "Qual letra começa a palavra “BOLA”?",
    imagem: "⚽ BOLA",
    alternativas: [
      { emoji: "🔤", texto: "B" },
      { emoji: "🔤", texto: "M" },
      { emoji: "🔤", texto: "S" }
    ],
    correta: 0
  },

  // Pergunta 26
  {
    texto: "Qual destas opções é uma letra?",
    imagem: "🔤 ❓",
    alternativas: [
      { emoji: "🔤", texto: "A" },
      { emoji: "5️⃣", texto: "5" },
      { emoji: "⭐", texto: "Uma estrela" }
    ],
    correta: 0
  },

  // Pergunta 27
  {
    texto: "Qual palavra corresponde à imagem de um gato?",
    imagem: "🐱",
    alternativas: [
      { emoji: "🐱", texto: "GATO" },
      { emoji: "⚽", texto: "BOLA" },
      { emoji: "🏠", texto: "CASA" }
    ],
    correta: 0
  },

  // Pergunta 28
  {
    texto: "Qual figura é igual ao modelo apresentado?",
    imagem: "Modelo: 🔺",
    alternativas: [
      { emoji: "🔺", texto: "A figura igual ao modelo" },
      { emoji: "🔷", texto: "Uma figura diferente" },
      { emoji: "🟩", texto: "Outra figura diferente" }
    ],
    correta: 0
  },

  // Pergunta 29
  {
    texto: "Qual objeto está diferente dos outros três?",
    imagem: "🍎 🍎 🍌 🍎",
    alternativas: [
      { emoji: "🍌", texto: "O objeto diferente" },
      { emoji: "🍎", texto: "Um dos objetos iguais" },
      { emoji: "🍎", texto: "Outro objeto igual" }
    ],
    correta: 0
  },

  // Pergunta 30
  {
    texto: "Ouça: “O menino pegou o guarda-chuva porque estava chovendo.” Por que ele pegou o guarda-chuva?",
    imagem: "🧒 ☔ 🌧️",
    alternativas: [
      { emoji: "🌧️", texto: "Porque estava chovendo" },
      { emoji: "🥵", texto: "Porque estava com calor" },
      { emoji: "🛝", texto: "Porque queria brincar" }
    ],
    correta: 0
  }

];
