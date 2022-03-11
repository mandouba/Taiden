// // List of questions. First mentioned answer is correct one.
// const questionsArr = [ , ];
    
 
// //     question: "What goes up and down but doesnt move?",
// //     answers: ["A staircase"]
// // },
// // {
// //     question: "What gets wet while drying?",
// //     answers: ["A towel"]
// // },
// // {
// //     question: "What has hands, but can’t clap?",
// //     answers: ["A clock"]
// // }, {
// //     question: " What has legs, but doesn’t walk?",
// //     answers: ["A tablr"]
// // }, {
// //     question: "What runs all around a backyard, yet never moves?",
// //     answers: ["A fence "]
// const answersArr = ["Short","An envelope","Dozens","Money","A cold"];
// let inputAnswer = [],
// wrongAnswers = 3,
// tries = 0
// attempts = []; //how many times you tired


// document.querySelector('riddle-placement').innerHTML = randomQuestion;
// document.querySelector('reset-button').innerHTML = reset()

// ////------ running functions--------




function showConfirm() {
  var riddleQ = (prompt("What five-letter word becomes shorter when you add two letters to it?",
  ));
  if (riddleQ = 'Short') {
    alert("correct answer!");
  } else {
    alert("wrong answer");
    // to limit user for limited count
    if (--max_count > 0)
      showConfirm()
  }

  prompt(" A word I know, six letters it contains, remove one letter and 12 remains. What is it?"
  );
  if (riddleQ = 'Dozens'){
    alert("correct answer!");
  } else {
    alert("wrong answer");
    // to limit user for limited count
    if (--max_count > 0)
      showConfirm()
  }

    (prompt("People make me, save me, change me, raise me. What am I?",
  ));
  if (riddleQ = 'Money') {
    alert("You WON!");
  } else {
    alert("wrong answer");
    // to limit user for limited count
    if (--max_count > 0)
      showConfirm()
  }
}
showConfirm();

















// guessedWord();
// reset();
// updateTries()
// gameWon();
// gameOver();
// answerTry();



// //  ---------- functions---------

// function questions(){
//     let randomQuestion = " ";
//     for ( i=0; i< questionsArr.length; i++)
//     randomQuestion += questionsArr(Math.floor(Math.random() * questionsArr.length))
// }

// questions();

// function yourAnswer(){
//     if( inputAnswer === answersArr){
// return alert('congratulations you got it!')
// };
// }
// yourAnswer();

// function reset() {
//   mistakes = 0;
//   guessed = [];
//   randomWord();
//   guessedWord();
//   updateMistakes();
//   generateButtons();
//   riddleQuestions();
//   reset();
// }
// function correctAnswer(){ if( questionsArr[0] === answersArr [0] || questionsArr[1] === answersArr [1] || questionsArr[2] === answersArr[2] || questionsArr[3] === answersArr[3] || questionsArr[4] === answersArr[4])
//     return alert('You Win!')
// else{
//     return alert("You Lose")
// }
// }
// function reset() {
//     let randomQuestions = Math.floor(Math.random()*(riddleQuestions.length));
//     document.getElementById('pQuestions').innerHTML = riddleQuestions[randomQuestions]
// }

//     function guessAttempt() {
//         guessed.indexOf(guessAttempt) === -1 ? guessed.push(guessAttempt) : null;
//         document.getElementById(guessAttempt).setAttribute('disabled', true);
        
//   if (answer.indexOf(guessAttempt) >= 0) {
//     answerAttempt();
//     gameWon();

//   } else if (answer.indexOf(answerAttempt) === -1) {
//     tries++;
//     updateTries();
//     gameOver();
//   }
// }


// function gameWon() {
//   if (inputAnswer === answer) {
//     alert('Congratulations!')
//   }
// }

// function gameOver() {
//   if (tries === wrongAnswers) {
//    return alert("you lost!")
//   }
// }

// function answerTry() {
//     wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    
//     document.getElementById('wordSpotlight').innerHTML = wordStatus;
// }

// function updateTries() {
//     document.getElementById('tries').innerHTML = mistakes;