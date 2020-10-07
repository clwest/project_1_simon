console.log("sanity check")

//Basic game operations

let score = 0
let colorArrary = ["blue", "green", "yellow", "red"]
let currentGame = []
let player = []
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
