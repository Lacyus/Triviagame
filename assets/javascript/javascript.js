$(document).ready(function (){

    var questionsNAnswers = [
        {
            question: "Which of these items are the most frequently purchased item from the supermarket?",
            choices: ["Banana", "Toilet paper", "Eggs", "Bread"],
            answer: 0,
            image: "assets/images/banana.gif"
        },

        {
            question: "What's the first Pokemon to be trademarked?",
            choices: ["Pikachu", "Mew", "Eevee", "Charmander"],
            answer: 1,
            image: "assets/images/mew.gif"   
        },

        {
            question: "What is the name of the summer camp in the Friday the 13th movie series?",
            choices: ["Camp Ruby Lake", "Camp Emerald Lake", "Camp Lake Lake", "Camp Crystal Lake"],
            answer: 3,
            image: "assets/images/camp.jpeg"   
        },

        {
            question: "Which artist's song was the 10 billionth iTunes download",
            choices: ["Drake", "Johnny Cash", "Jay-Z", "Lady Gaga"],
            answer: 1,
            image: "assets/images/jhonny.gif"   
        },

        {
            question: "What country does the cappuccino originate from?",
            choices: ["Britain", "France", "Italy", "Spain"],
            answer: 2,
            image: "assets/images/italy.jpeg"   
        },
    ]

    var timer = 30;
    var correct = 0;
    var wrong = 0;
    var userPick ="";
    var newArray = [];
    var holder = [];

};