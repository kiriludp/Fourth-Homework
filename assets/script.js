
//TODO: Create HTML for quiz
//ToDo: Create a start button




//TODO: Create a timer/CountDown



//TODO: When timer starts, a question should appear

//TODO: Create Questions
var time=60

const youKnowSoobin = [
    { 
    q: "What is TxTs debut album?",
    a: [ {text: "Dream Chapter: Magic", isCorrect: false},
        {text: "No More Dream", isCorrect: false},
        {text: "Dream Chapter: Star", isCorrect: true},
    ]
    
},
{  
    q: "What company did Enhypen debut under?",
    a: [ { text: "BigHit", isCorrect: false },
         { text: "BeLift", isCorrect: true },
         { text: "JYP", isCorrect: false}
    ]
},
{   
    q: "Which Korean Act beat out BTS on the Billboard Top 100?", 
    a: [ { text: "Stray Kids", isCorrect: false },
         { text: "Black Pink", isCorrect: false },
         { text: "BTS", isCorrect: true},
    ]
}

];
var index=0
function nextQuestion() {
    index++
    document.getElementById("question").textContent=youKnowSoobin[index].q
    document.getElementById("option1").textContent=youKnowSoobin[index].a[0].text
    document.getElementById("option2").textContent=youKnowSoobin[index].a[1].text
    document.getElementById("option3").textContent=youKnowSoobin[index].a[2].text
}
function startQuiz() {
    console.log(index)
    document.getElementById("question").textContent=youKnowSoobin[index].q
    document.getElementById("option1").textContent=youKnowSoobin[index].a[0].text
    document.getElementById("option2").textContent=youKnowSoobin[index].a[1].text
    document.getElementById("option3").textContent=youKnowSoobin[index].a[2].text
        setInterval(function(){
        time--
            document.getElementById("timer").textContent=time
    },1000)
}

var startButton=document.querySelector("#start");
var nextButton=document.querySelector("#next");
var submitButton=document.querySelector("#submit");

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', showResults);

// function showResults(){}

    //This will display the quiz right away-- it is important to adjust this and have the questions come up one at a time




function buildQuiz() {
    const output = [];

youKnowSoobin.forEach( (currentQ, questionN) => {
    

    const answers = [];

    for(letter in currentQ.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${questionN}" value="${letter}"></input>
                ${letter} :
                    ${currentQ.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class ="slide">
            <div class ="question"> ${currentQ.question} </div>
            <div class ="answers"> ${answers.join('')} </div>`
        );

    }
);

quizContainer.innerHTML = output.join(' ');

}

function showResults(){
    document.getElementById("scores").style="display:block"
    document.getElementById("quizContent").style="display:none"
    document.getElementById("timer").style="display:none"
    const answerContainer =
    quiz.Container.querySelectorAll('.answers');

    let numCorrect = 0;

youKnowSoobin.forEach( (currentQ, questionN) => {
        const answerContainer = answerContainer[questionN];
        const selector = `input[name=question${questionN}]: checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
     if (userAnswer == "true") {
                result[0].innerHTML = "True";
                result[0].style.color = "green";
                numCorrect++;
            } else {
                result[0].innerHTML = "False";
                result[0].style.color = "red";
    }
});

resultsConstainer.innterHTML = `${numCorrect} out of ${youKnowSoobin.length}`;


const quizContainer = document.getElementById('quiz');
const resultsConstainer = document.getElementById("results");
const nextButton = document.getElementById ("next");
const submitButton = document.getElementById ("submit");




}

//TODO: When a question is answered
    //When answered correctly, move on to next questioin
    //When answered incorrectly, deduct time from the countdown
//TODO: Log answers
    //local storage
//TODO: Allow user to log initials with score


