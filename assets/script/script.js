const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const BWCheck = document.getElementById("bw-checkbox")
const BWB = document.getElementById("bw-button");

document.addEventListener('change', function() {
if (BWCheck.checked) {
BWB.disabled = false;
} else {
BWB.disabled = true;
}
});

document.addEventListener('DOMContentLoaded', function() {
BWB.addEventListener('click', function() {
window.location.href = "pagina2.html";

});
});


let index = 0;
let punteggio = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

function mostraDomanda() {
const currentQuestion = questions[index];
let showQuestion = document.getElementById("question")
showQuestion.innerText = `${currentQuestion.question}`
let contatoreDomanda = document.getElementById("questionCount")
contatoreDomanda.innerText = `${index + 1}`


let answersHTML = "";
answersHTML += `<button onclick="checkAnswer(true)">${currentQuestion.correct_answer}</button>`;
currentQuestion.incorrect_answers.forEach(answer => {
answersHTML += `<button onclick="checkAnswer(false)">${answer}</button>`;
});
document.getElementById("answerButtons").innerHTML = answersHTML;
}

function checkAnswer(isCorrect) {
  
if (isCorrect) {
punteggio++;
}
}



function prossimaDomanda() {
index++;
if (index < questions.length) {
mostraDomanda();

} else {
mostraRisultato();
}
}

function mostraRisultato() {
let mostraPunteggio = document.getElementById("quiz-container")
mostraPunteggio.innerHTML = `<p>Punteggio finale: ${punteggio}/${questions.length}</p>`;
}

mostraDomanda();
const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer')

function startQuizLoop() {
//input
const hr = 0
const min = 0
const sec = 30

const hours = hr * 3600000
const minutes = min * 60000
const seconds = sec * 1000;

const setTime = hours + minutes + seconds;

const startTime = Date.now();

const futureTime = startTime + setTime;

const timerLoop = setInterval(countDownTimer);


// funzione del countdown
countDownTimer();


function countDownTimer () {

  const currentTime = Date.now()
  const remainingTime = futureTime - currentTime
  const angle = ( remainingTime / setTime ) * 360

  // progress indicator
  if (angle > 180) {
      semicircles[2].style.display = 'none';
      semicircles[0].style.transform = `rotate(180deg)`
      semicircles[1].style.transform = `rotate(${angle}deg)`
  } else {
      semicircles[2].style.display = 'block';
      semicircles[0].style.transform = `rotate(${angle}deg)`
      semicircles[1].style.transform = `rotate(${angle}deg)`
  }

  // mostra il testo all'interno del timer

  const secs = Math.floor((remainingTime / (1000)) % 60)

  timer.innerHTML = 
  `<div class="colon">${secs}</div>`



   //5sec-condition

   /*
   if ( remainingTime <= 10000) {
  semicircles[0].style.backgroundColor = "red"
  semicircles[1].style.backgroundColor = "red"
  timer.style.color = "red"
  }
  */



   //end

  //qui va inserito che quando remainingTime arriva a zero viene caricata una nuova domanda
  if ( remainingTime < 0) {
    clearInterval(timerLoop)

    /*
    semicircles[0].style.display = 'none'
    semicircles[1].style.display = 'none'
    semicircles[2].style.display = 'none'

    /*
    timer.innerHTML = 
    `<div>0</div>`
    */

    // fa ripartire il loop
    startQuizLoop()
    prossimaDomanda()

}
 /* if ( remainingTime < 0) {
      clearInterval(timerLoop)
      semicircles[0].style.display = 'none'
      semicircles[1].style.display = 'none'
      semicircles[2].style.display = 'none'


      timer.innerHTML = 
      `<div>0</div>`
      prossimaDomanda()
    */
  }

}
startQuizLoop()
