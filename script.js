    function set_gray(){
      document.body.style.backgroundColor = "gray";      
    }  

    function set_grayer(){
      document.body.style.backgroundColor = "darkgray";
    }

    function set_moregrayer(){      
      document.body.style.backgroundColor = "#4c4d4c";
    }
    function set_green(){      
      document.body.style.backgroundColor = "#25800e";
    }
    function set_blue(){      
     document.body.style.backgroundColor = "#0777b3";
    }
    function set_white(){      
      document.body.style.backgroundColor = "white";
    }
    function set_matrix(){
      document.body.style.backgroundImage = "url(https://steamuserimages-a.akamaihd.net/ugc/948473612694052970/118196EA9B85F75FEC024275DE36BC9952F42EAA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"
    }
    function emptybg(){
      document.body.style.backgroundImage ="";
    }
  function set_textgray(){
   document.body.style.color = "white";
  }

  function set_textgrayer(){
   document.body.style.color = "white";
  }

  function set_textmoregrayer(){
   document.body.style.color = "white";
  }
  function set_textgreen(){
   document.body.style.color = "white";
  }

  function set_textblue(){
   document.body.style.color = "white";
  }
  function set_textmatrix(){
   document.body.style.color = "#7ee312";
  }
  function set_textwhite(){
   document.body.style.color = "black";
  }
  function restart(){
    location.reload();
  }
var questions = [
  {
      question: "Заменит ли программистов нейросеть 'ChatGPT?'",
      answers: {
        1: 'Нет',
        2: 'Да',
  },
      rightAnswer: "1"
  },
  {
  question: "Что за нейросеть Midjourney?",
      answers: {
        1: 'Создание картинок на вебсайте',
        2: 'Преоброзование картинок в аниме',
        3: 'Удаление бэкграунда любой картинки',
        4: 'Создание любых картинок в Дискорде'
      },
      rightAnswer: "4"
  },
  {
  question: "Как создать новый виртуальный рабочий стол (в Windows 10)?",
      answers: {
        1: 'Ctrl + Win + D',
        2: 'Ctrl + Alt + (стрелка влево/вправо)',
        3: 'Win + i',
        4: 'Ctrl + Alt + Del'
      },
      rightAnswer: "1"
  },
  {
  question: "Кампания разработчиков которая создала игру 'Counter-Strike: Global Offensive'?",
      answers: {
        1: 'McDonalds',
        2: 'Axlebolt',
        3: 'Crowbar Collective',
        4: 'Valve'
      },
      rightAnswer: "4"
  },
  {
  question: "Что произойдет если нажать Alt + F4?",
      answers: {
        1: 'Начнется апокалипсис',
        2: 'Закроется текущее окно или программа',
        3: 'Перезапуск видеокарты ПК, в большинство случаях компьютер не выдерживает и выдает синий экран',
        4: 'Отправка сообщения инопланетным формам жизни'
      },
      rightAnswer: "2"
  },
  {
    question: "Почему ошибку в программе называют 'баг'",
        answers: {
          1: 'Ошибка раздражает как надоедливый жук',
          2: 'Из-за жука случился один из первых сбоев, когда жук залез внутрь компьютера и закоротил реле',
          3: 'B честь собаки по кличке Баг первого программиста, который исправил ошибку в программе',
          4: 'Кодовое слово для информация которая засекречена персоналом телеграфных и телефонных компаний в отношении неполадок c электрооборудованием и радиотехникой'
        },
        rightAnswer: "2"
    },
    {
    question: "На логотипе какой компании изображен полковник Сандерс?",
        answers: {
          1: 'Stark Industries',
          2: 'KFC',
          3: 'Rheinmetall AG',
          4: 'Microsoft Corporation'
              
        },
        rightAnswer: "2"
    },
    {
      question: "Что произойдет если ввести в Google 'кошка' и нажать на оранжевую кнопку ниже?",
          answers: {
            1: 'Откроется страничка википедии про котов',
            2: 'Появится лапка',
            3: 'Пробежит кошка',
            4: 'Появится морда кота'
                
          },
          rightAnswer: "2"
      }
  ];




    var testContainer = document.getElementById('test');
    var resultButton = document.getElementById('resultButton');
    var resultContainer = document.getElementById('results');

    generateTest(questions, testContainer, resultButton, resultContainer);

    function generateTest(questions, testContainer, resultButton, resultContainer) {
      function showQuestions (questions, testContainer) {
        var out = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
          answers = [];
          for (var ans_text in questions[i].answers) {
            answers.push('<label><br><input type="radio" name="question'+i+'"value="'+ans_text+'">'+ans_text+') '+ questions[i].answers [ans_text] + '</label>');
        }
        out.push('<div class = "question">' + questions[i].question + '</div>'+ '<div class="answers"' + answers.join('') + '</div>');
      }

      testContainer.innerHTML = out.join('');
}

      function showResult(questions, testContainer, resultContainer){
      var answerContainers = testContainer.querySelectorAll('.answers');

      var userAnswer = '';
      var rightAnswerNum = 0;

      for (var i=0; i<questions.length; i++){
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

          if (userAnswer == questions[i].rightAnswer){
          answerContainers[i].style.color = '#00ff44';
          rightAnswerNum++;
          }else{
          answerContainers[i].style.color = 'red'; 
          }
      }

    
    var resultStr;
    if(rightAnswerNum < 3){
        resultStr = "grade: 2";
   }else if(rightAnswerNum == 3){
        resultStr = "grade: 4";
   }else if(rightAnswerNum == 4){
        resultStr = "grade: 6";
   }else if(rightAnswerNum == 5){
    resultStr = "grade: 8";
   }else if(rightAnswerNum == 6){
    resultStr = "grade: 9";
   }else if(rightAnswerNum == 7){
    resultStr = "grade: 10";
   }else if(rightAnswerNum == 8){
    resultStr = "12";
   }
   resultContainer.innerHTML = resultStr;
   }

   showQuestions(questions, testContainer);

   resultButton.onclick = function(){
      showResult(questions, testContainer, resultContainer);
   }


   

}