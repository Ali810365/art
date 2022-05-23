const quizData = [
    {
        question: "Web accessibility encompasses all disablities that affect access to the web includes:",
        a: "auditory",
        b: "physical",
        c: "cognitive",
        d: "all",
        e:"none",
        correct: "d",
    },
    {
        question: "which one is example of screen reader",
        a: "NVDA",
        b: "Accessiblity insight for web",
        c: "both",
        d: "none",
        e:"none",
        correct: "a",
    },
    {
        question: "When did standard on web accessiblity came in to effect?",
        a: "July, 1995",
        b: "July, 2013",
        c: "July, 1999",
        d: "July, 2014",
        e:"none",
        correct: "b",
    },
    {
        question: "What does ARIA stand for?",
        a: "Accessiblity rich international agency",
        b: "Accessibility rich international application",
        c: "Accessibility rich internet application",
        d: "Accessiblity rich international area",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${(score/4)*100} % correctly</h2>
                <button onclick="location.reload()">Try again</button>
            `
        }
    }
})