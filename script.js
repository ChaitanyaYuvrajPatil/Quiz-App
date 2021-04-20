const quizData = [
    {
        question: 'How old is Chaitanya?',
        a: '10',
        b: '17',
        c: '20',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What most used programing language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'who is president of India?',
        a: 'Chaitanya Patil',
        b: 'Narendra Modi',
        c: 'Barak Obama',
        d: 'Rahul Gandhi',
        correct: 'b'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals MoterBoats',
        correct: 'a'
    },
    {
        question: 'What year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1914',
        d: 'none of the above',
        correct: 'd'
    },
];

const questionE1 = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);
    questionE1.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    //currentQuestion++;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //currentQuiz++;

    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 style="text-align : center;">Your score is ${score}/${quizData.length}</h2>`
            submitBtn.innerHTML = `<h3 onclick="location.reload()">Reload</h3>`;
        }
    }

    /**/
    //1:04
})
