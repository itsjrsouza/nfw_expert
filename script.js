    const perguntas = [
         // Nível Fácil
         {
            pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
            respostas: ["var", "let", "const"],
            correta: 0
          },
          {
            pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
            respostas: ["Objeto", "String", "Array"],
            correta: 1
          },
          {
            pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
            respostas: ["//", "/* */", "--"],
            correta: 0
          },
        
          // Nível Intermediário
          {
            pergunta: "O que o método 'parseInt()' faz em JavaScript?",
            respostas: ["Converte um número para string", "Arredonda um número decimal", "Converte uma string para número inteiro"],
            correta: 2
          },
          {
            pergunta: "Como se declara uma função em JavaScript?",
            respostas: ["function minhaFuncao() {}", "minhaFuncao = function {}", "let function = minhaFuncao() {}"],
            correta: 0
          },
          {
            pergunta: "O que acontece se você tentar acessar uma variável que não foi declarada?",
            respostas: ["Retorna 'undefined'", "Gera um erro", "Retorna 'null'"],
            correta: 1
          },
          {
            pergunta: "Qual é a saída de 'typeof NaN'?",
            respostas: ["number", "NaN", "undefined"],
            correta: 0
          },
        
          // Nível Difícil
          {
            pergunta: "Qual destes métodos remove o último elemento de um array e o retorna?",
            respostas: ["shift()", "pop()", "splice()"],
            correta: 1
          },
          {
            pergunta: "Qual destes operadores pode ser usado para verificar valores e tipos ao mesmo tempo?",
            respostas: ["==", "===", "="],
            correta: 1
          },
          {
            pergunta: "Qual é a saída de 'console.log(0.1 + 0.2 === 0.3)'?",
            respostas: ["true", "false", "undefined"],
            correta: 1
          }
        ];

// seleção dos atributos do HTML
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector ('template')

// para contar as certas
    const corretas = new Set()

// adicionando a quantidade de perguntas certas
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição das perguntas
    for(const item of perguntas) {
        const quizItem = template.content.cloneNode(true) // true para selecionar todas as perguntas
        quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) // para que cada pergunta tenha sua selação do input

        dt.querySelector('input').value = item.respostas.indexOf(resposta) // para ajustar o valor do value das perguntas
        

// evento de mudança do input

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
                corretas.delete (item) // apresentar somente a contagem das perguntas corretas
                if (estaCorreta) {
                    corretas.add(item)
                }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild (dt)
    }

// para remover o texto da tag <span>
    quizItem.querySelector('dl dt').remove()

// coloca a pergunta na tela
    quiz.appendChild(quizItem)
}