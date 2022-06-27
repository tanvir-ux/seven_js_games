const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let speed = 700

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    console.log(randomSquare)
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        console.log(square.className)
        if ( square.id === hitPosition) {
            result++
            score.textContent = result
            hitPosition = null;
        }
    })
})

function moveSquare() {
    
    timerId = setInterval(randomSquare, speed)
}
moveSquare()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        setTimeout(() => {
            location.reload()
        }, 1000)
    }
}

let countDownTimerId = setInterval(countDown, 1000);