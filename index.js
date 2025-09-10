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
  for (let i = 0; i < questionsArr.length; i++) {
    let playerAnswer = confirm(questionsArr[i].question);
  }
}
