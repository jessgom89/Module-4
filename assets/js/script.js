var introduction = document.getElementById("introduction")
var startquiz = document.getElementById("start-quiz")
var question = document.getElementById("question")
var initial = document.getElementById("initials")
var highscore = document.getElementById("highscores")
var time = document.getElementById("time")
var timeid =""
var questions =[{
 title:"q1", 
 choices:["c1","c2","c3","c4"],
 solution:"c2"
  
},{
title:"q2",
choices:["c1","c2","c3","c4"],
solution:"c1"    
},{
title:"q3",
choices:["c1","c2","c3","c4"],
solutions:"c3"
    
},{
title:"q4",
choices:["c1","c2","c3","c4"],
solutions:"c4"

},{
title:"q5",
choices:["c1","c2","c3","c4"],
solutions:"c2"    
}]
var timeleft =questions.length*15

startquiz.addEventListener("click",function(){
introduction.classList.add("hide")
question.classList.remove("hide")

})
