
//TODO: Create HTML for quiz
//ToDo: Create a start button

const button =document.createElement('button')

button.innerText = "Start Quiz"

button.addEventListener('click', () => {
    alert("Get Ready...Go!")

})

function Start() {
    var x = document.createElement ("button");
    var t = document.createTextNode("Let's Get It!");
    x.appendChild(t);
    document.body.appendChild(x);
}

//TODO: Create a timer/CountDown

var timeLeft = 30;
var elem = document.getElementById('Timer');
var timerId = setInterval('coundown', 1000);

function countdown() {
    if (timeLeft ==0) {
        clearTimeout(timerId);

    } else {
        elem.innerHTML = timeLeft + 'seconds remaining';
            timeLeft--;
    }    
 }

//TODO: When timer starts, a question should appear

//TODO: Create Questions

var youKnowSoobin = [
    {
        question:"Who is the leader of BTS?",
        answers: {
            a: "Kim Seokjin"
            b: "Min Yoongi"
            c: "Kim Namjoon"
            d: "Kim Taehyung"
        },
        correctAnswer: "c"

    },

    {
        question: "Who is the youngest of TomorrowxTogether?",
        answers: {
            a: "Choi Beomgyu"
            b: "Choi Yeonjun"
            c: "Kang Taehyun"
            d: "Huening Kai"
        },
        correctAnswer: "d"
    },
    
];


//TODO: When a question is answered
    //When answered correctly, move on to next questioin
    //When answered incorrectly, deduct time from the countdown
//TODO: Log answers
//TODO: Allow user to log initials with score


