console.log("sanity check")

//Basic game operations



const newGame = 0
let score = 0
let colorArrary = ["blue", "green", "yellow", "red"]
let currentGame = []
let player = []
let scoreCounter = document.getElementById("score-counter")
const greenButton = document.getElementById("green").addEventListener("click", function(){
    console.log("I Clicked the green button")
})
const redButton = document.getElementById("red").addEventListener("click", function(){
    console.log("I clicked the red button")
})
const blueButton = document.getElementById("blue").addEventListener("click", function(){
    console.log("I clicked the blue button")
})
const yellowButton = document.getElementById("yellow").addEventListener("click", function(){
    console.log("I clicked the yellow button")
})
const startButton = document.getElementById("start").addEventListener("click", function(){
    console.log("Let the games begin")
})

for (let i = 0; i < colorArrary.length; i++){
    console.log(colorArrary[i])
}