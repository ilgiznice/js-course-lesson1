const questions = [
  {
    step: 1,
    q: 'Да?',
    a: [
      {
        text: 'Да',
        nextStep: 'finish'
      },
      {
        text: 'Нет',
        nextStep: 'lose'
      }
    ]
  },
];

function renderQuestion(step) {
  let question = null;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].step === step) {
      question = questions[i];
      break;
    }
  }
  //  console.log(question); JS
  //  echo PHP
  //  print_r() PHP
  //  var_dump($variable); PHP
  if (!question) return false;
  document.getElementById('current-step').value = question.step;
  document.getElementById('question').textContent = question.q;
  for (let i = 0; i < question.a.length; i++) {
    //  Старое (правильное)
    // const input = document.createElement('input');
    // input.type = 'radio';
    // input.name = 'answers';
    // input.value = question.a[i].nextStep;
    // const span = document.createElement('span');
    // span.textContent = question.a[i].text;
    // const text = document.createTextNode();
    // input.appendChild(text);
    // document.getElementById('answers').appendChild(input).appendChild(span);
    // Новое (временное решение)
    const input = `<input type="radio" name="answers" value="${question.a[i].nextStep}" />${question.a[i].text}`;
    document.getElementById('answers').innerHTML += input;
  }
}

renderQuestion(1);
