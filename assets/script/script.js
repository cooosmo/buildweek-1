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
    const BWB = document.getElementById("bw-button")
    
    BWCheck.addEventListener("change", function() {
        if (BWCheck.checked) {
          BWB.disabled = false;
        } else {
            BWB.disabled = true;
        }
    })

   function mostraDomande () {
    let index = 1
    let punteggio = 0
    //const headingUno = document.querySelector("h2") //poi prendere con id ?!
    const TEXT = document.getElementById("text")

    for (let question of questions) {
      const DOMANDA = question.question
      
      const HEADINIG = document.createElement("h2")// //crea un titolo per ogni domanda
      //NOI DOBBIAMO FARE NO CREA UN TITOLO PER OGNI DOMANDA MA CAMBIA l'inner.Text per ogni domanda 
      //console.log(domanda)
      HEADINIG.innerText = DOMANDA
      
      TEXT.appendChild(HEADINIG)
      console.log(TEXT)
        const CORRECT = question.correct_answer
        const OPZIONI = question.incorrect_answers
        OPZIONI.push(CORRECT)

        for(let opzione of OPZIONI) {
          const RADIO = document.createElement("input")
          const LABEL = document.createElement("label")
          RADIO.setAttribute("type", "radio")
          RADIO.setAttribute("value", opzione)
          LABEL.setAttribute("for", opzione)
          LABEL.innerText = opzione
          TEXT.appendChild(RADIO)
          TEXT.appendChild(LABEL)
        }
    }

    /*for ( let question of questions) {
      const domanda = question.question
      //let risposte = []
      const correct = question.correct_answer
      //console.log(correct)
      const opzioni = question.incorrect_answers
      opzioni.push(correct)
      
      
      headingUno.innerText = domanda
      console.log(domanda)
      const TEXT = document.getElementById("text")
      for ( let opzione of opzioni) {
        const radio = document.createElement("input")
        const label = document.createElement("label")
        
        radio.setAttribute("type", "radio")
        radio.setAttribute("value", domanda)
        label.setAttribute("for", opzione)
        label.innerText = opzione
        console.log(opzione)
        //console.log(radio, label)
        TEXT.appendChild(radio)
        TEXT.appendChild(label)
      }

      
      
      //risposte.push(correct)
     


    }
    */
   }
   mostraDomande()