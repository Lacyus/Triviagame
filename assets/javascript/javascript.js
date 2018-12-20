$(document).ready(function () {

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
            image: "assets/images/camp.jpg"
        },

        {
            question: "Which artist's song was the 10 billionth iTunes download",
            choices: ["Drake", "Johnny Cash", "Jay-Z", "Lady Gaga"],
            answer: 1,
            image: "assets/images/johnny.gif"
        },

        {
            question: "What country does the cappuccino originate from?",
            choices: ["Britain", "France", "Italy", "Spain"],
            answer: 2,
            image: "assets/images/italy.jpg"
        }];

    var timer = 25;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    var userPick = "";
    var newArray = [];
    var holder = [];

    var running = false;
    var questionCount = questionsNAnswers.length;
    var intervalId;
    var pick;

    
    $("#reset").hide();
    // Game start
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < questionsNAnswers.length; i++) {
            holder.push(questionsNAnswers[i]);
        }
        // starts the timer
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
         }
    }

        //timer countdown
    function decrement() {
        $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

         //when timer reaches 0
        if (timer === 0) {
            unanswered++;
            stop();
            $("#answers").html("<p>Time is up! The correct answers is: " + pick.choices[pick.answer] + "</p>");
            hidepicture();
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        //picks a random question from the array
        index = Math.floor(Math.random() * questionsNAnswers.length);
        pick = questionsNAnswers[index];


        //iterate through answers array and display
        $("#questions").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choices.length; i++) {
             var userPick = $("<div>");
             userPick.addClass("answerchoice");
             userPick.html(pick.choices[i]);
            //array position for answers check
             userPick.attr("data-guessvalue", i);
            $("#answers").append(userPick);
                
            }
        }

        $(".answerchoice").on("click", function () {
            //grab array position from userPick
            userPick = parseInt($(this).attr("data-guessvalue"));

            //correct guess or wrong guess outcomes
            if (userPick === pick.answer) {
                stop();
                correct++;
                userPick = "";
                $("#answers").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                wrong++;
                userPick = "";
                $("#answers").html("<p>Wrong! The correct answer is: " + pick.choices[pick.answer] + "</p>");
                hidepicture();
            }
        })
    })

    function hidepicture() {
        $("#answers").append("<img src=" + pick.image + ">");
        newArray.push(pick);
        questionsNAnswers.splice(index, 1);

        var hidpic = setTimeout(function () {
            $("#answers").empty();
            timer = 5;

            //run the score screen if all questions answered
            if ((wrong + correct + unanswered) === questionCount) {
                $("#questions").empty();
                $("#questions").html("<h3>Game Over!  Here's the results: </h3>");
                $("#answers").append("<h4> Correct: " + correct + "</h4>");
                $("#answers").append("<h4> Incorrect: " + wrong + "</h4>");
                $("#answers").append("<h4> Unanswered: " + unanswered + "</h4>");
                $("#reset").show();
                correct = 0;
                wrong = 0;
                unanswered = 0;

            } else {
                runTimer();
                displayQuestion();

            }
        }, 3000);


    }

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answers").empty();
        $("#questions").empty();
        for (var i = 0; i < holder.length; i++) {
            questionsNAnswers.push(holder[i]);
        }
        runTimer();
        displayQuestion();

    })

});