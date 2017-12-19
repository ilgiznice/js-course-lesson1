const questions = [
  {
    step: 1,
    q: 'Где вы сейчас находитесь?',
    a: [
      {
        text: 'В IT-парке',
        nextStep: 2
      },
      {
        text: 'Дома',
        nextStep: 'lose'
      },
      {
        text: 'На работе',
        nextStep: 'lose'
      }
    ]
  },
  {
    step: 2,
    q: 'Чем вы сейчас занимаетесь?',
    a: [
      {
        text: 'Изучаю PHP',
        nextStep: 'lose'
      },
      {
        text: 'Изучаю MODX',
        nextStep: 4
      },
      {
        text: 'Изучаю JS',
        nextStep: 3
      }
    ]
  },
  {
    step: 3,
    q: 'И как у Вас получается?',
    a: [
      {
        text: 'Хорошо',
        nextStep: 'congratulations'
      },
      {
        text: 'Не очень хорошо',
        nextStep: 'comeBackLater'
      }
    ]
  }
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
  document
    .getElementById('answers').innerHTML = '';
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

document
  .getElementById('send-answer')
  .addEventListener('click', function () {
    //  Текущий шаг
    const currentStep = document
      .getElementById('current-step');
    //  Массив ответов
    const answers = document
      .getElementsByName('answers');
    //  Цикл по ответам, поиск выбранного
    for (let i = 0; i < answers.length; i++) {
      //  Если ответ был выбран
      if (answers[i].checked) {
        switch (answers[i].value) {
          case 'finish':
            // Выигрыш
            alert('Вы прошли квест');
            //  TODO: вывести сообщение
            window.location.reload();
            break;
          case 'lose':
            // Проигрыш
            alert('Сожалеем, попробуйте ещё раз');
            //  Число 1
            renderQuestion(1);
            break;
          case 'congratulations':
            return congratulations();
          case 'comeBackLater':
            return comeBackLater();
          default:
            //  Всё, что не finish и не lose
            //  1, 2, ..., 100, ..., 1000, ...
            renderQuestion(parseInt(answers[i].value));
            break;
        }
      }
    }
  });

/**
 * Создание и вставка изображения на страницу
 * @param {String} src 
 */
function insertImage(src) {
  //  Создаём виртуальную картинку
  const img = document
    .createElement('img');
  //  Выставляем источник равным SRC (см. параметры)
  img.src = src;
  //  Вставляем картинку в <div id="result">
  document
    .getElementById('result')
    .append(img);
}

function congratulations() {
  //  Салюты
  insertImage('http://www.amic.ru/images/news/news/378306_size2.jpg');
  // document
  //   .getElementById('result')
  //   .classList += 'success';
}

function comeBackLater() {
  //  Мотивация
  insertImage('http://ic.pics.livejournal.com/marydemidova/18140083/94985/94985_original.jpg');
  renderQuestion(1);
  // document
  //   .getElementById('result')
  //   .classList += 'motivation';
}

// '2' -> 2
