var score = localStorage['Score'];
var correctquestions = localStorage['QuestionReport'];
var temp = 1;
var Interval = setInterval(CorrectHeading, temp);
function CorrectHeading()
{
  document.querySelector('h1').innerHTML = "Your Score: " + score + "/5";
  for(var i = 0; i < 5; ++i)
  {
    var a = "Question" + (i + 1);
    if(correctquestions[i] == 1)
      document.getElementById(a).style.color = "green";
    else
      document.getElementById(a).style.color = "red";
  }
  temp = 10000000;
}
