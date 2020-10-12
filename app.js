console.log("sanity check")

//Basic game operations
let currentGame = []
let playerChoice = []
let flash = []
let turn; 
let winning;
let gameIsStarted = false
let intervalId;
let scoreNumber = document.getElementById("score-number")
let allColorFlash = 0
let allColorFlashRef;


const startButton = document.getElementById("start")
const blueButton = document.getElementById("blue")
const greenButton = document.getElementById("green")
const yellowButton = document.getElementById("yellow")
const redButton = document.getElementById("red")



startButton.addEventListener("click", function(){
    setupGame()
})

setupGame = () => {
    allColorFlash = 0
    currentGame = []
    playerChoice = []
    turn = 0
    flash = 0
    intervalId = 0
    scoreNumber.innerHTML = '0'
    playerSelect = true
    //changed this to 11 instead of 10 to be able to stop at 10
    for (let i = 0; i < 11; i++) {
        currentGame.push(Math.floor(Math.random() * 4) + 1)
    }
    simon = true

    //intervalId = setInterval(game, 200)
    game();
}
game = () => {
    if (simon) {
        clearColor()
        allColorFlashRef = setInterval(() => {
            if (allColorFlash === 1) blueFlash()
            if (allColorFlash === 2) greenFlash()
            if (allColorFlash === 3) yellowFlash()
            if (allColorFlash === 4) redFlash()
            if (allColorFlash > 4) {
                clearTimeout(allColorFlashRef)
                clearColor()
                flashTurn()
                return;
            }
            allColorFlash++
        }, 200)
    }
}

flashColor = (color) => {
    console.log("flashing color", color)
    if (color === 1) blueFlash()
    if (color === 2) greenFlash()
    if (color === 3) yellowFlash()
    if (color === 4) redFlash()
}

flashTurn = () => {
    setTimeout(() => {
        flashColor(currentGame[turn])
        setTimeout(() => {
            clearColor()
        }, 200)
    }, 500)
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

playerWin = () => {
    // if player was wrong
    // if I switch from !== to === it will kind of work but not really
    // as intended so I could go to work for Blizzard!
    if ([playerChoice.length - 1] === currentGame[playerChoice.length - 1]) {
        playerChoice = []
        console.log("check here", playerChoice)
        winning = false
        scoreNumber.innerHTML = '0'
        return
    }

    // if here, player was right

    scoreNumber.innerHTML = turn

       // flashes the next turn
       setTimeout(() => {
        turn++
        flashTurn()
        winning = true
    }, 1000)

    if(playerChoice.length === 10 && winning === true) {
        winGame()
        return
    }

    // flashes the next turn
   /* setTimeout(() => {
        turn++
        flashTurn()
        winning = true
    }, 1000)
    */
}


blueButton.addEventListener("click", function() {
    playerChoice.push(1)
    blueFlash()
    setTimeout(() => {
        clearColor()
        playerWin()
    }, 300)
})

greenButton.addEventListener("click", function(){
    playerChoice.push(2)
    greenFlash()
    setTimeout(() => {
        clearColor()
        playerWin()
    }, 300)
})

yellowButton.addEventListener("click", function() {
    playerChoice.push(3)
    yellowFlash()
    setTimeout(() => {
        clearColor()
        playerWin()
    }, 300)
})

redButton.addEventListener("click", function () {
    playerChoice.push(4)
    redFlash()
    setTimeout(() => {
        clearColor()
        playerWin()
    }, 300)
})

flashColor2 = () => {
    blue.style.backgroundColor = "rgb(68, 85, 230)"
    green.style.backgroundColor= "rgb(62, 221, 75)"
    yellow.style.backgroundColor = "rgba(255, 234, 55, 0.8)"
    red.style.backgroundColor = "rgba(221, 75, 62, 0.8)"
}
winGame = () => {
    flashColor2()
    scoreNumber.innerHTML = "YOU WIN!"
}


