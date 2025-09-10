// Your code here
var questionsArr = [
  {
    question: "Are aquariums peaceful?",
    answer: true,
  },
  {
    question: "Is the sky blue?",
    answer: true,
  },
  {
    question: "Are blue jays native to the US?",
    answer: true,
  },
  {
    question: "Was Thomas Jefferson our 2nd president?",
    answer: false,
  },
  {
    question: "Can dogs eat grapes?",
    answer: false,
  },
];

function runQuiz() {
let correctAnswer = 0; //Accidentally had this outside the function, so it didn't reset the score!
  for (let i = 0; i < questionsArr.length; i++) {
    let playerAnswer = confirm(questionsArr[i].question);
    if (playerAnswer == questionsArr[i].answer) {
      correctAnswer += 1;
    }
  }
  let score = (correctAnswer / questionsArr.length) * 100;
  alert("Your Results: " + Math.round(score) + "%");
}
