export const PITANJA = {
  title: "Javascript quiz",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      title:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      choices: ["stringify()", "parse()", "convert()", "None of the above"],
      correctAnswer: "stringify()",
    },
    {
      title:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "var and let", "None of the above"],
      correctAnswer: "var and let",
    },
    {
      title:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choices: [
        "document.write()",
        "console.log()",
        "window.alert",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      title: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      correctAnswer: "const",
    },
  ],
};
