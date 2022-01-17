const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: "Which one of these is a JavaScript package manager?",
    choice1: "Node.js",
    choice2: "TypeScript",
    choice3: "npm",
    choice4: "Python",
    answer: "3",
    },
    {
    question: "Which quiz answer is usually the correct one?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "We're taking a quiz?",
    answer: "3",
    },
    {
    question: "Who invented JavaScript?",
    choice1: "Douglas Crockford",
    choice2: "Sheryl Sandberg",
    choice3: "Brendan Eich",
    choice4: "Albert Einstein",
    answer: "3",
    },
    {
    question: "Which tool can you use to ensure code quality?",
    choice1: "Angular",
    choice2: "jQuery",
    choice3: "RequireJS",
    choice4: "ESLint",
    answer: "4",
    },
    {
    question: "Which is a great resource for various documentation?",
    choice1: "Freecodecamp.org",
    choice2: "Stack-overflow",
    choice3: "Youtube",
    choice4: "MDN by Mozzila",
    answer: "4"
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
}

getNewQuestions= () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostREcentScore", score)

        return window.location.assign("end.html");
    };

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions()

        }, 1000);
    });
});

incrementScore = num => {
    score +=num
    scoreText.innerText = score
};

startGame();