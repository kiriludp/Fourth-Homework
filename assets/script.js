
//TODO: Create HTML for quiz
//ToDo: Create a start button

const button =document.createElement('button')

button.innerText = "Start Quiz"

button.addEventListener('click', () => {
    alert("Get Ready...Go!")

})

//TODO: Create a timer/CountDown
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


