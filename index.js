const perguntas = [
  {
    pergunta: "Qual é o nome do mapa principal em Mobile Legends?",
    respostas: [
      "Mapa Abyssal",
      "Mapa Celestial",
      "Mapa do Céu"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o herói que é conhecido como o 'Rei das Feras'?",
    respostas: [
      "Tigreal",
      "Balmond",
      "Gatotkaca"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o objetivo do jogo em Mobile Legends?",
    respostas: [
      "Destruir a base inimiga",
      "Capturar a bandeira",
      "Coletar moedas de ouro"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos jogadores compõem uma equipe em Mobile Legends?",
    respostas: [
      "3",
      "4",
      "5"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o herói que é conhecido como 'O Mago Supremo'?",
    respostas: [
      "Cyclops",
      "Eudora",
      "Kagura"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o item que permite aos heróis se teletransportarem para uma torre aliada?",
    respostas: [
      "Botas Rápidas",
      "Espada da Ira",
      "Inspiração Sagrada"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a habilidade suprema de Miya, a 'Rainha dos Arqueiros'?",
    respostas: [
      "Flecha Mágica",
      "Flecha Dupla",
      "Flecha Chuvosa"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o herói conhecido como 'O Último Samurai'?",
    respostas: [
      "Yi Sun-shin",
      "Hanzo",
      "Ling"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o herói que é um robô e pode se transformar em um carro?",
    respostas: [
      "Baxia",
      "Alpha",
      "Johnson"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do monstro neutro que fornece buffs de dano e velocidade de movimento?",
    respostas: [
      "Tartarus",
      "Argus",
      "Turtle"
    ],
    correta: 2
  }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt .querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true ou false
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
