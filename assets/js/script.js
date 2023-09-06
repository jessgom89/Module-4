var introduction = document.getElementById("introduction")
var startquiz = document.getElementById("start-quiz")
var question = document.getElementById("question")
var initial = document.getElementById("initials")
var highscore = document.getElementById("highscores")
var time = document.getElementById("time")
var title = document.getElementById("title")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var choicelist = document.getElementById("choicelist")
var initialsection = document.getElementById("initialsection")
var initial = document.getElementById("initial")
var savebtn = document.getElementById("savebtn")
var highscore = document.getElementById("highscore")
var scores = document.getElementById("scores")
var gobackbutton = document.getElementById("gobackbutton")
var clearbutton = document.getElementById("clearbtn")

var finalscore = document.getElementById("finalscore")
var timeid = ""
var index = 0
var allscores = []
if (localStorage.getItem("allscores")) {
    allscores = JSON.parse(localStorage.getItem("allscores"))
}
var questions = [{
    title: "q1",
    choices: ["c1", "c2", "c3", "c4"],
    solution: "c2"

}, {
    title: "q2",
    choices: ["c1", "c2", "c3", "c4"],
    solution: "c1"
}, {
    title: "q3",
    choices: ["c1", "c2", "c3", "c4"],
    solutions: "c3"

}, {
    title: "q4",
    choices: ["c1", "c2", "c3", "c4"],
    solutions: "c4"

}, {
    title: "q5",
    choices: ["c1", "c2", "c3", "c4"],
    solutions: "c2"
}]
var timeleft = questions.length * 15

startquiz.addEventListener("click", function () {
    introduction.style.display = "none"
    question.classList.remove("hide")
    displayQuestion()
    timeid = setInterval(() => {

        if (timeleft === 0) {
            clearInterval(timeid)
            time.textContent = timeleft
        }
        else {
            time.textContent = timeleft--
        }


    }, 1000);
})
function displayQuestion() {
    title.textContent = questions[index].title
    choice1.textContent = questions[index].choices[0]
    choice2.textContent = questions[index].choices[1]
    choice3.textContent = questions[index].choices[2]
    choice4.textContent = questions[index].choices[3]

}
function nextQestion(event) {
    if (event.target.matches("button")) {
        index++
        if (index < questions.length) {
            displayQuestion()
        }
        else {
            console.log("done")
            clearInterval(timeid)
            initialsection.classList.remove("hide")
            question.classList.add("hide")
            finalscore.textContent = time.textContent
        }

    }

}
function saveinital() {
    allscores.push({
        score: time.textContent,
        initial: initial.value


    })
    localStorage.setItem("allscores", JSON.stringify(allscores))
    initialsection.classList.add("hide")
    highscore.classList.remove("hide")
    showScores()
}
function showScores() {
    scores.textContent = ""
    for (let i = 0; i < allscores.length; i++) {
        var li = document.createElement("li")
        li.textContent = allscores[i].initial + " - " + allscores[i].score
        scores.appendChild(li)

    }
}
function goback() {
    location.reload()
}
function clear() {
    localStorage.clear()
    scores.textContent=""
}
choicelist.addEventListener("click", nextQestion)
savebtn.addEventListener("click", saveinital)
gobackbutton.addEventListener("click", goback)
clearbutton.addEventListener("click", clear)
