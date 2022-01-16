const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function quizBuilder() {
  const output = [];
  
  TestQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      
      for(letter in currentQustion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  
  quizContainer.innerHTML = output.join('');
  
  };
  
  function displayResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      };
    });

    resultContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

  };

const TestQuestions = [
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which quiz answer is usually the correct one?",
      answers: {
        a: "A",
        b: "B",
        c: "C",
        d: "We're taking a quiz?"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "Which is a great resource for various documentation?",
      answers: {
        a: "Freecodecamp.org",
        b: "Stack-overflow",
        c: "Youtube",
        d: "MDN by Mozzila"
      },
      correctAnswer: "d"
    }
  ];

quizBuilder();

submitButton.addEventListener("click", displayResults);

/* create question array
create answers for it
create a button that starts the quiz
add event listener for the submit button
create a timer for the quiz
create a way for wrong answers to deduct time from the quiz
create a display for how many answers were correct in the end */
