const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas:[
        "Uma linguagem de programação de alto nível.",
        "Um software de edição de texto.",
        "Um sistema operacional.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas:[
        "variable nomeDaVariavel = valor;",
        "let nomeDaVariavel = valor;",
        "var nomeDaVariavel = valor;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é utilizado para exibir uma mensagem de alerta em JavaScript?",
      respostas:[
        "console.log()",
        "alert()",
        "prompt()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma única linha em JavaScript?",
      respostas:[
        "// Este é um comentário de linha única",
        "<!-- Este é um comentário de linha única -->",
        "/* Este é um comentário de linha única */",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '==' faz em JavaScript?",
      respostas:[
        "Compara se dois valores são idênticos, incluindo tipo.",
        "Compara se dois valores são idênticos, mas não considera o tipo.",
        "Atribui um valor a uma variável.",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve 'Hello World!' em um alerta em JavaScript?",
      respostas:[
        "alert('Hello World!');",
        "print('Hello World!');",
        "console.log('Hello World!');",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para obter o comprimento de uma string em JavaScript?",
      respostas:[
        "length()",
        "count()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador para a exponenciação em JavaScript?",
      respostas:[
        "**",
        "^^",
        "//",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas:[
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual declaração é usada para criar uma função em JavaScript?",
      respostas:[
        "function: minhaFuncao() {}",
        "myFunction = function() {}",
        "function minhaFuncao() {}",
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