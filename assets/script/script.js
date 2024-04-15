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
  ]
  
  const BWCheck = document.getElementById("bw-checkbox")
  const BWB = document.getElementById("bw-button")
  
  document.addEventListener('change', function () {
    if (BWCheck.checked) {
        BWB.disabled = false
    } else {
        BWB.disabled = true
    }
  })
  
  /* Randomizza l' array questions */
  questions.sort(() => Math.random() - 0.5)
  
  let index = 0
  let punteggio = 0
  
  function mostraDomanda() {
    const currentQuestion = questions[index];
    document.getElementById("question").innerText = `${currentQuestion.question}`
    let contatoreDomanda = document.getElementById("questionCount")
    contatoreDomanda.innerText = `${index + 1}`
  
    let answers = currentQuestion.incorrect_answers;
    answers.push(currentQuestion.correct_answer)
    answers.sort(() => Math.random() - 0.5)
    let answersHTML = ""
    answers.forEach(answer => {
        answersHTML += `<button onclick="checkAnswer(${answer === currentQuestion.correct_answer})">${answer}</button>`
    })
    document.getElementById("answerButtons").innerHTML = answersHTML
  }
  
  function checkAnswer(isCorrect) {
    if (isCorrect) {
        punteggio++
        //console.log(punteggio)
        return punteggio
     
    }
   
  }
  
  function prossimaDomanda() {
    index++;
    if (index < questions.length) {
        mostraDomanda()
    } else {
        mostraRisultato()
    }
  }
  let chart = document.querySelector(".quizChart")
  let timerLoop
  let finish = false
  

  function mostraRisultato() {
    let mostraPunteggio = document.getElementById("quiz-container")
    //mostraPunteggio.innerHTML = `<p>Punteggio finale: ${punteggio}/${questions.length}</p>`
    chart.classList.add("visible")

    let incorrect = questions.length - punteggio
    let correttePerc = document.querySelector('p#corrette')
    let incorrettePerc = document.querySelector('p#incorrette')

    let calcoloPercCorrette = (punteggio/10)*100
    console.log(calcoloPercCorrette)
    let calcoloPercIncorrette = (incorrect/10)*100
    console.log(calcoloPercIncorrette)

    correttePerc.innerHTML = `${calcoloPercCorrette} %`
    incorrettePerc.innerHTML = `${calcoloPercIncorrette} %`

    let totaleRisposteGiuste = document.querySelectorAll('#correctContainer .totale-risposte')
    let totaleRisposteSbagliate = document.querySelectorAll('#wrongContainer .totale-risposte')

    totaleRisposteGiuste.innerHTML = `${punteggio}`
    totaleRisposteSbagliate.innerHTML = `${incorrect}`

    let esito = document.querySelector('.esito p')

    if(calcoloPercCorrette>50){
        esito.innerHTML = "<small><small>Congratulations\! You passed the exam\.We\'ll send you the certificate in few minutes\.Check your email \(including promotions / spam folder\)</small></small>"
    } else {
        esito.innerHTML = "<small><small>Spiaze! You didn't pass the exam.</small></small>"
    }

    finish = true
   
  
    
  var quizData = {
      //labels: ['Risposte Giuste', 'Risposte Sbagliate'],
      datasets: [{
          data: [punteggio, incorrect], 
          backgroundColor: [
              '#00FFFF',
              '#D20094'  
          ],
          borderColor: [
              '#00FFFF',
              '#D20094'
          ],
          borderWidth: 1
      }]
  };

  
  var chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
          display: true,
          position: 'bottom'
      }
  };
  
  
  
  var ctx = document.getElementById('quizChart').getContext('2d');
  var quizChart = new Chart(ctx, {
      type: 'doughnut',
      data: quizData,
      options: chartOptions
  });
  }
  
  mostraDomanda()
  
  /*function disable() {
    const BUTTON = document.querySelectorAll("button")
    BUTTON.forEach(index => { index.disabled = true })
  }*/
  
  /* Logica del timer */
  function startQuizLoop() {
    const semicircles = document.querySelectorAll('.semicircle')
    const timer = document.querySelector('.timer')
  
    const hr = 0
    const min = 0
    const sec = 30
  
    const hours = hr * 3600000
    const minutes = min * 60000
    const seconds = sec * 1000
  
    const setTime = hours + minutes + seconds
    let startTime = Date.now()
    let futureTime = startTime + setTime
  
    timerLoop = setInterval(countDownTimer)
    countDownTimer()
  
    function countDownTimer() {
        let currentTime = Date.now()
        const remainingTime = futureTime - currentTime
        const angle = (remainingTime / setTime) * 360
  
        if (angle > 180) {
            semicircles[2].style.display = 'none'
            semicircles[0].style.transform = `rotate(180deg)`
            semicircles[1].style.transform = `rotate(${angle}deg)`
        } else {
            semicircles[2].style.display = 'block'
            semicircles[0].style.transform = `rotate(${angle}deg)`
            semicircles[1].style.transform = `rotate(${angle}deg)`
        }
  
        const secs = Math.floor((remainingTime / (1000)) % 60)
  
        timer.innerHTML =
            `<div class="colon">${secs}</div>`
  
        if (remainingTime < 0) {
            clearInterval(timerLoop)
            startQuizLoop()
            prossimaDomanda()
        }
  
        if (finish) {
            clearInterval(timerLoop)
        }
    }
  }
  
  
  
  startQuizLoop()
  
  let nextBtn = document.querySelector('#nextButton')
  nextBtn.addEventListener('click', ()=>{
    prossimaDomanda(), clearInterval(timerLoop), startQuizLoop()
  })
  
  
  
  