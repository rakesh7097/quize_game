const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaialbleQuestions = [];

let questions = [
    {
    question: "inside which element do we got the js?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer : 1
    }

]

// CONSTANT 
const CORRECT_BONUS=10;
const MAX_QUESTIONS=3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaialbleQuestions = [...questions];
    console.log(avaialbleQuestions)
    getNewQuestion();                     //function
}

getNewQuestion = () => {

    if(avaialbleQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        return window.location.assign('/end.html')
    }


    questionCounter++;
    const questionIndex= Math.floor(Math.random()*avaialbleQuestions.length);
    currentQuestion =avaialbleQuestions[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText =currentQuestion['choice'+number]
    }
    )


    
    avaialbleQuestions.splice(questionIndex,1);

    acceptingAnswers =true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(acceptingAnswers) return;

        acceptingAnswers=false;
        const selectedChoice =e.target;
        const selectedAnswer = selectedChoice.dataset('number');
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();