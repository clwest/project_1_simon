console.log("sanity check")

//Basic game operations
let currentGame = []
let playerChoice = []
let flash = []
let turn;
let winning;
let win;
let ready = false
let simon;
let startGame = false
let intervalId;
let scoreCounter = document.getElementById("score-counter")

const simonStart = document.getElementById("simon").addEventListener("click", function() {
    if (simonStart.click === true) {
        startGame = true
        scoreCounter.innerHTML = 0
    }else 
    startGame = false
    scoreCounter.innerHTML = ""
    clearColor()
    clearInterval(intervalId)
})

const startButton = document.getElementById("start").addEventListener("click", function(){
    if (startGame || win) {
        player()
    }
    player()
})

player = () => {
    currentGame = []
    playerChoice = []
    turn = 1
    flash = 0
    winning = true
    intervalId = 0
    scoreCounter.innerHTML = 0
    win = false
    playerSelect = true
    for (let i = 0; i < 10; i++) {
        currentGame.push(Math.floor(Math.random() * 4) + 1)
    }
    simon = true

    intervalId = setInterval(game, 1000)
}
game = () => {
    ready = false
    if (flash === turn) {
        clearInterval(intervalId)
        simon = false;
        clearColor()
        scoreCounter.innerHtml = 0
        ready = true
    }
        if (simon) {
        clearColor()
        setTimeout(() => {
            if (currentGame[flash] === 1) blueFlash()
            if (currentGame[flash] === 2) greenFlash()
            if (currentGame[flash] === 3) yellowFlash()
            if (currentGame[flash === 4]) redFlash()
            flash++
        }, 200)
    }
}
blueFlash = () => {
    if (blue) { 
        click = true
        blue.style.backgroundColor = "rgb(68, 85, 230)"
    }

}
greenFlash = () => {
    if (green) {
        click = true
        green.style.backgroundColor = "greenyellow"
    }
}

yellowFlash = () => {
    if (yellow) {
        click = true
        yellow.style.backgroundColor = "rgb(224, 255, 47)"
    }
}

redFlash = () => {
    if (red) {
        click = true
        red.style.backgroundColor = "rgb(255, 0, 21)"
    }
}

clearColor = () => {
    blue.style.backgroundColor = "rgba(7, 68, 236, 0.8)"
    green.style.backgroundColor= "rgba(62, 221, 75, 0.8)"
    yellow.style.backgroundColor = "rgba(255, 234, 55, 0.8)"
    red.style.backgroundColor = "rgba(221, 75, 62, 0.8)"
}


const blueButton = document.getElementById("blue").addEventListener("click", function() {
    if (ready) {
        playerChoice.push(1)
        playerWin()
        blueFlash()
        if(!win) {
            setTimeout(() => {
                clearColor
            }, 300)
        }
    }
})




const greenButton = document.getElementById("green").addEventListener("click", function(){
    if (ready) {
        playerChoice.push(2)
        playerWin()
        greenFlash()
        if(!win) {
            setTimeout(() => {
                clearColor
            }, 300)
        }
    }
})
const yellowButton = document.getElementById("yellow").addEventListener("click", function() {
    if (ready) {
        playerChoice.push(3)
        Playerwin()
        yellowFlash()
        if(!win) {
            setTimeout(() => {
                clearColor
            }, 300)
        }
    }
})
const redButton = document.getElementById("red").addEventListener("click", function () {
    if (ready) {
        playerChoice.push(4)
        playerWin()
        redFlash()
        if(!win) {
            setTimeout(() => {
                clearColor
            }, 300)
        }
    }
})

playerWin = () => {
    if (playerChoice = [playerChoice.length - 1] !== currentGame[playerChoice.length -1]) winning === false
    if(playerChoice.length === 10 && winning === true) {
        winGame()
    }
    if (win === false) {
        flashColor()
        setTimeout(() => {
            scoreCounter.innerHTML = 0
            clearColor()
        }, 1000)
    }
}



flashColor = () => {
    blue.style.backgroundColor = "rgb(68, 85, 230)"
    green.style.backgroundColor= "rgb(62, 221, 75)"
    yellow.style.backgroundColor = "rgba(255, 234, 55, 0.8)"
    red.style.backgroundColor = "rgba(221, 75, 62, 0.8)"
}
winGame = () => {
    flashColor()
    scoreCounter.innerHTML = "YOU WIN!"
}


