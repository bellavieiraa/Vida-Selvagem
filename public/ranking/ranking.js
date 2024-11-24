import { verifyToken } from "../../Vida-Selvagem/utils/verify-token";

const url = "../login/login.html";
verifyToken(url);

const questions = [
  {
    "title": "Produtores",
    "icon": "../../assets/images/icon-produtor.png",
    "questions": [
      {
        "question": "Quem são os produtores na cadeia alimentar?",
        "options": ["Herbívoros", "Carnívoros", "Plantas", "Decompositores"],
        "answer": "Plantas"
      },
      {
        "question": "Qual é a principal função dos produtores?",
        "options": ["Caçar outros animais", "Fazer fotossíntese", "Comer plantas", "Decompor matéria orgânica"],
        "answer": "Fazer fotossíntese"
      },
      {
        "question": "O que as plantas utilizam para produzir seu alimento?",
        "options": ["Gás carbônico e água", "Comida já pronta", "Solos ricos em nutrientes", "Luz e ar"],
        "answer": "Gás carbônico e água"
      },
      {
        "question": "Qual dos seguintes é um exemplo de produtor?",
        "options": ["Vaca", "Alga", "Raposa", "Fungo"],
        "answer": "Alga"
      },
      {
        "question": "Os produtores são a base de qual nível da cadeia alimentar?",
        "options": ["Nível terciário", "Nível primário", "Nível secundário", "Nível quaternário"],
        "answer": "Nível primário"
      },
      {
        "question": "O que as plantas produzem durante a fotossíntese?",
        "options": ["Oxigênio e glicose", "Gás carbônico", "Proteínas e lipídios", "Ácido sulfúrico"],
        "answer": "Oxigênio e glicose"
      },
      {
        "question": "Quais organismos são considerados produtores primários?",
        "options": ["Predadores", "Plantas e algas", "Carnívoros", "Herbívoros"],
        "answer": "Plantas e algas"
      },
      {
        "question": "Os produtores são essenciais para a cadeia alimentar porque:",
        "options": ["Ajudam a decompor os cadáveres", "São a fonte inicial de energia", "Caçam outros animais", "Controlam a população de herbívoros"],
        "answer": "São a fonte inicial de energia"
      },
      {
        "question": "Qual desses grupos de organismos pode ser considerado um produtor?",
        "options": ["Fungos", "Algas marinhas", "Leões", "Corvos"],
        "answer": "Algas marinhas"
      },
      {
        "question": "Onde podemos encontrar os produtores na natureza?",
        "options": ["No topo da cadeia alimentar", "Na base da cadeia alimentar", "Somente no fundo do mar", "Apenas em florestas tropicais"],
        "answer": "Na base da cadeia alimentar"
      }
    ]
  },
  {
    "title": "Consumidores",
    "icon": "../../assets/images/icon-consu1.png",
    "questions": [
      {
        "question": "O que são consumidores na natureza?",
        "options": ["Organismos que produzem seu próprio alimento", "Organismos que se alimentam de outros organismos", "Organismos que decompoem matéria orgânica", "Organismos que vivem em simbiose com plantas"],
        "answer": "Organismos que se alimentam de outros organismos"
      },
      {
        "question": "Quais são os diferentes tipos de consumidores?",
        "options": ["Consumidores primários, secundários e terciários", "Herbívoros, carnívoros e decompositores", "Produtores, decompositores e consumidores", "Animais aquáticos, terrestres e aéreos"],
        "answer": "Consumidores primários, secundários e terciários"
      },
      {
        "question": "O que são consumidores decompositores?",
        "options": ["Organismos que caçam e matam outros seres vivos", "Organismos que se alimentam de restos de matéria orgânica em decomposição", "Organismos que se alimentam de plantas", "Organismos que produzem alimento a partir da luz solar"],
        "answer": "Organismos que se alimentam de restos de matéria orgânica em decomposição"
      },
      {
        "question": "Qual é a função dos consumidores na cadeia alimentar?",
        "options": ["Produzir energia para todo o ecossistema", "Reciclar nutrientes através da decomposição", "Regular a população de plantas e herbívoros", "Controlar o clima do ambiente"],
        "answer": "Regular a população de plantas e herbívoros"
      },
      {
        "question": "O que é uma cadeia alimentar?",
        "options": ["Um ciclo de nutrientes entre produtores e decompositores", "Uma sequência de organismos em que cada um serve de alimento para o próximo", "Uma pirâmide que representa a hierarquia de espécies", "Um conjunto de plantas que competem por luz e nutrientes"],
        "answer": "Uma sequência de organismos em que cada um serve de alimento para o próximo"
      },
      {
        "question": "Como os consumidores interagem com os produtores?",
        "options": ["Eles competem com os produtores por nutrientes", "Eles se alimentam dos produtores, como plantas ou algas", "Eles ajudam na polinização das plantas", "Eles formam simbioses com os produtores para troca de alimentos"],
        "answer": "Eles se alimentam dos produtores, como plantas ou algas"
      },
      {
        "question": "Os consumidores podem ser onívoros?",
        "options": ["Não, eles só se alimentam de plantas", "Sim, eles se alimentam de plantas e animais", "Não, eles se alimentam apenas de outros consumidores", "Sim, mas apenas de outros consumidores"],
        "answer": "Sim, eles se alimentam de plantas e animais"
      },
      {
        "question": "Qual a importância dos consumidores na manutenção do equilíbrio ecológico?",
        "options": ["Eles ajudam a manter a população de predadores naturais baixa", "Eles controlam o crescimento de plantas e herbívoros", "Eles protegem os produtores de doenças", "Eles aumentam a biodiversidade ao comerem de tudo"],
        "answer": "Eles controlam o crescimento de plantas e herbívoros"
      },
      {
        "question": "O que acontece se um consumidor for retirado de uma cadeia alimentar?",
        "options": ["O ecossistema se mantém equilibrado sem alteração", "A população de produtores aumenta exponencialmente", "A cadeia alimentar se desestabiliza e pode causar desequilíbrios", "Não há nenhum impacto sobre o ecossistema"],
        "answer": "A cadeia alimentar se desestabiliza e pode causar desequilíbrios"
      },
      {
        "question": "Como os consumidores contribuem para o ciclo de nutrientes?",
        "options": ["Eles produzem oxigênio e alimento para outros organismos", "Eles devolvem nutrientes ao solo através de suas excreções ou decomposição", "Eles impedem a decomposição de matéria orgânica", "Eles aumentam a quantidade de carbono no ecossistema"],
        "answer": "Eles devolvem nutrientes ao solo através de suas excreções ou decomposição"
      }
    ]
  },
  {
  "icon": "../../assets/images/icon-decom.png",
  "questions": [
      {
          "question": "O que são decompositores na natureza?",
          "options": [
             "Organismos que se alimentam de plantas vivas",
              "Organismos que transformam matéria orgânica em nutrientes reutilizáveis",
              "Organismos que caçam e matam outros animais",
              "Organismos que produzem alimento a partir de luz solar"
          ],
          "answer": "Organismos que transformam matéria orgânica em nutrientes reutilizáveis"
      },
      {
          "question": "Qual é o papel dos decompositores em um ecossistema?",
          "options": [
              "Produzir oxigênio e alimento para outros organismos",
              "Caçar presas para controlar a população de herbívoros",
              "Reciclar nutrientes e devolver elementos ao solo",
              "Prevenir a competição entre espécies"
          ],
          "answer": "Reciclar nutrientes e devolver elementos ao solo"
      },
      {
          "question": "Quais são os principais tipos de decompositores?",
          "options": [
              "Herbívoros e carnívoros",
              "Fungos, bactérias e alguns insetos",
              "Plantas e algas",
              "Consumidores primários e secundários"
          ],
          "answer": "Fungos, bactérias e alguns insetos"
      },
      {
          "question": "De que maneira os decompositores afetam a cadeia alimentar?",
          "options": [
              "Eles aumentam o número de produtores",
              "Eles ajudam a manter o equilíbrio de herbívoros e predadores",
              "Eles ajudam a fechar o ciclo de nutrientes, liberando elementos essenciais ao solo",
              "Eles impedem que os produtores cresçam de maneira descontrolada"
          ],
          "answer": "Eles ajudam a fechar o ciclo de nutrientes, liberando elementos essenciais ao solo"
      },
        {
          "question": " Por que os decompositores são importantes para a saúde do solo?",
          "options": [
              "Eles criam uma camada protetora de nutrientes no solo",
              "Eles liberam oxigênio necessário para o crescimento das plantas",
              "Eles transformam matéria orgânica em compostos ricos em nutrientes",
              "Eles competem com as plantas por recursos no solo"
          ],
          "answer": "Eles transformam matéria orgânica em compostos ricos em nutrientes"
      },
      {
          "question": "Os decompositores se alimentam de matéria orgânica que está em que estado?",
          "options": [
              "Apenas matéria orgânica fresca e saudável",
              "Matéria orgânica em decomposição",
              "Apenas matéria orgânica de plantas vivas",
              "Apenas materiais inorgânicos"
          ],
          "answer": "Matéria orgânica em decomposição"
      },
      {
          "question": "Como os decompositores ajudam a reduzir a quantidade de resíduos orgânicos no ambiente?",
          "options": [
              "Degradando a matéria orgânica em compostos simples, como dióxido de carbono e nutrientes",
              "Armazenando os resíduos em seu corpo para formar novos recursos",
              "Transformando os resíduos em energia para os consumidores primários",
              "Usando os resíduos para aumentar a quantidade de oxigênio no ar"
          ],
          "answer": "Degradando a matéria orgânica em compostos simples, como dióxido de carbono e nutrientes"
      },
      {
          "question": "Qual é a principal diferença entre decompositores e consumidores?",
          "options": [
              "Decompositores consomem matéria viva, enquanto consumidores se alimentam apenas de matéria morta",
              "Decompositores quebram matéria orgânica morta, enquanto consumidores se alimentam de matéria viva",
              "Decompositores produzem alimentos através da fotossíntese, enquanto consumidores não",
              "Não há diferença; ambos têm funções semelhantes no ecossistema"
          ],
          "answer": "Decompositores quebram matéria orgânica morta, enquanto consumidores se alimentam de matéria viva"
      },
      {
          "question": "O que acontece com os nutrientes após a decomposição realizada pelos decompositores?",
          "options": [
              "São acumulados no corpo dos decompositores",
              "São liberados para o solo e ficam disponíveis para as plantas",
              "São dispersos no ar sem utilidade para outros organismos",
              "São absorvidos pelos herbívoros"
          ],
          "answer": "São liberados para o solo e ficam disponíveis para as plantas"
      },
      {
          "question": "Em qual parte do ciclo de vida dos organismos a decomposição é crucial?",
          "options": [
              "Durante a fase de crescimento",
              "Durante a reprodução",
              "Durante a morte e a decomposição",
              "Durante a fotossíntese"
          ],
          "answer": " Durante a morte e a decomposição"
      }
  ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

// Elementos do DOM
const startForm = document.getElementById('startForm');
const playerNameInput = document.getElementById('playerName');
const quizSection = document.getElementById('quizSection');
const questionContainer = document.getElementById('questionContainer');
const nextQuestionButton = document.getElementById('nextQuestion');
const rankingElements = document.querySelectorAll('ul li');

startForm.addEventListener('submit', function (event) {
    event.preventDefault();
    playerName = playerNameInput.value.trim();
    if (playerName) {
        startForm.classList.add('hidden');
        quizSection.classList.remove('hidden');
        showQuestion();
    }
});

function showQuestion() {
    const currentQuestion = questions[Math.floor(currentQuestionIndex / questions[0].questions.length)].questions[currentQuestionIndex % questions[0].questions.length];
    questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        ${currentQuestion.options.map((option, index) => `
            <button onclick="checkAnswer(${index})">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[Math.floor(currentQuestionIndex / questions[0].questions.length)].questions[currentQuestionIndex % questions[0].questions.length];
    if (selectedIndex === currentQuestion.options.indexOf(currentQuestion.answer)) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length * questions[0].questions.length) {
        showRanking();
    } else {
        showQuestion();
    }
}

function showRanking() {
    const rankings = JSON.parse(localStorage.getItem('ranking')) || [];
    rankings.push({ name: playerName, score: score });
    rankings.sort((a, b) => b.score - a.score);
    localStorage.setItem('ranking', JSON.stringify(rankings));
    displayRanking(rankings);
}

function displayRanking(rankings) {
    rankingElements.forEach((element, index) => {
        if (index < rankings.length) {
            element.textContent = `${rankings[index].name} - ${rankings[index].score}`;
        } else {
            element.textContent = "";
        }
    });
}
