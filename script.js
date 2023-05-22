import {questions} from "./module.js"
const question = document.querySelector("#question");
const answers = document.querySelectorAll(".answer");
const atext = document.getElementById("text1");
const btext = document.getElementById("text2");
const ctext = document.getElementById("text3");
const dtext = document.getElementById("text4");
const btn = document.querySelector(".btn");
const result = document.querySelector("#result");
const element = document.getElementById("Answer");

var currentdata;
var score = 0;
var count = 0;
var ar = [-1];
main();
function main() {

  currentdata = (Math.floor(Math.random() * 10));
  for (var i of ar) {
    var flag = true;
    if (i == currentdata) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    count++;
    if (count <= 10) {
      disselect();

      const currentquizData = questions[currentdata];
      question.innerHTML = `Q${count}:` + currentquizData.question;
      atext.innerHTML = currentquizData.a;
      btext.innerHTML = currentquizData.b;
      ctext.innerHTML = currentquizData.c;
      dtext.innerHTML = currentquizData.d;
      ar.push(currentdata);
    }
  }
  else {
    main();
  }
}

function disselect() {

  answers.forEach(answer => answer.checked = false)
}
function getSelected() {

  let answer;
  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  })

  return answer;
}
answers.forEach(item => {

  item.addEventListener("change", (e) => {
    fn(item.id);

  })

})

function fn(val) {
  if (val == questions[currentdata].correct) {
    element.innerHTML = `<p id="para">Your answer is right</p>`;
  }
  else {
    element.innerHTML = `<p id="para1">Your answer is wrong`;
  }
  answers.forEach(val => {
    val.disabled = true;
  })

}

btn.addEventListener("click", (e) => {
  var answer = getSelected();
  if (answer) {
    if (answer == questions[currentdata].correct) {
      score++;
    }

    if (count == 10) {
      btn.style.display = "none";
      result.innerHTML = `<p>You Scored ${score}/${10}</p>
    <center><button class='btn1' onclick='location.reload()'>Attempt Again</button></center>`
    }
    else {
      element.innerHTML = "";
      answers.forEach(item => {
        item.disabled = false;
      })
      main();
    }
  }
}
)


