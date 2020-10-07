console.log("sanity check")

//Basic game operations


let score = 0
let colorArrary = ["blue", "green", "yellow", "red"]
let currentGame = []
let player = []
let playerChoice = 0
let simonChoice = 0
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

newGame = () => {
    for (let i = 0; i < colorArrary.length; i++){
        if (playerChoice[i] === "red" && simonChoice[i] === "red"){
            console.log("congrats on to the next one")
        }else console.log("sorry try again")
        if (playerChoice[i] === "blue" && simonChoice === "blue"){
            console.log("congrats on to the next one")
        }else console.log("sorry try again")
        if (playerChoice[i] === "greeen" && simonChoice === "green"){
            console.log("congrats on to the next one")
        }else console.log("sorry try again")
        if (playerChoice[i] === "yellow" && simonChoice[i] === "yellow"){
            console.log("congrats on to the next one")
        }else console.log("sorry try again")
    }

}