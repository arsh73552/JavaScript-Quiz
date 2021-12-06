var num = 0;
time = 120;
var warning = 0;
var score = 0;
var correctquestions = [0,0,0,0,0];

var interval = setInterval(change_time, 1000);
var len = document.querySelectorAll('.Question').length;
function change_time()
{
    time--;
    document.querySelector('#stopwatch').innerHTML =toformat(time);
    if(time<60)
      document.querySelector('marquee').innerHTML = "Page Refreshes in : " + toformat(time)  + 's';
    if(time===0)
    {
      document.location.href = 'https://www.google.com/';
    }
    window.onblur = warning_func;
    window.onfocus = () => {

    };
}
function toformat(time)
{
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  if(time<10)
    return '00:0' + minutes + ':0' + seconds;
  if(time<70 && time>=60)
    return '00:0' + minutes + ':0' + seconds;
  else
    return '00:0' + minutes + ':' + seconds;
}


function DarkMode()
{
  if(num % 2==0)
  {
    document.body.style.backgroundColor = "lightblue";
    document.querySelector('marquee').style.color = "black";
    document.querySelector('#button1').textContent = "Dark Mode!";
    let demoClasses = document.querySelectorAll('.Question');

    demoClasses.forEach(element => {
      element.style.backgroundColor = 'gainsboro';
    });
    demoClasses[0];
    demoClasses.forEach(element => {
      element.style.color = 'black';
    });
    demoClasses[0];
    document.querySelector('#button1').style.color = "white";
    if(warning === 0)
    {
      document.querySelector('.warning').style.backgroundColor = "white";
      document.querySelector('.warning').style.color = "white";
    }
    document.getElementById('stopwatch').style.backgroundColor = "white";
    document.querySelector('#button1').style.background = "black";
    num++;
  }
  else
  {
    document.body.style.backgroundColor = "black";
    document.querySelector('marquee').style.color = "white";
    document.querySelector('#button1').textContent = "Light Mode!";
    let demoClasses = document.querySelectorAll('.Question');

    demoClasses.forEach(element => {
      element.style.backgroundColor = 'rgb(50,40,40)';
    });
    demoClasses[0];
    demoClasses.forEach(element => {
      element.style.color = 'white';
    });

    demoClasses[0];
    document.querySelector('#button1').style.color = "black";
    if(warning === 0)
    {
      document.querySelector('.warning').style.backgroundColor = "gainsboro";
      document.querySelector('.warning').style.color = "gainsboro";
    }
    document.getElementById('stopwatch').style.backgroundColor = "gainsboro";
    document.querySelector('#button1').style.background = "white";
    num++;
  }
}
function FontInc()
{
  document.querySelector('body').style.fontSize = "larger";
}
function FontDec()
{
  document.querySelector('body').style.fontSize = "smaller";
}
function Calc_Score()
{
  if(document.getElementById("Q1O3").checked)
    ++correctquestions[0];
  if(document.getElementById("Q2O3").checked)
    ++correctquestions[1];
  if(document.getElementById("Q3O3").checked)
    ++correctquestions[2];
  if(document.getElementById("Q4O2").checked)
    ++correctquestions[3];
  if(document.getElementById("Q5O1").checked)
    ++correctquestions[4];
  for(var i = 0; i < 5; ++i)
    score = score + correctquestions[i];
  document.location.href = 'ScoreSheet.html';
  localStorage.setItem('Score', score);
  localStorage.setItem('QuestionReport', correctquestions);
}
function warning_func()
{
  document.querySelector('.warning').style.color = "red"
  if(warning===1)
  {
    document.location.href = 'disqualified.html';
  }
  warning++;
  alert('warning');
}
