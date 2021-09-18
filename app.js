const MINUTES = 60
const HOURS = 60 * 60
const DAYS = 24 * HOURS

const $days = document.querySelector('#days')
const $hours =document.querySelector('#hours')
const $minutes = document.querySelector('#minutes')
const $seconds = document.querySelector('#seconds')

let previousDiff = {}

const countdown = document.querySelector('#countdown')

const launchDate = Date.parse(countdown.dataset.time) / 1000 // Data.parse() Recupere le temps ecoule' en milli seconde depuis le 1er janvier 1970

function refreshCountDown () {

    const difference = launchDate - (Date.now() / 1000); // Le temps qu'il y'a entre la date de fin et la date actuelle

    if ( difference <= 0 ) {
        document.querySelector('.container').style.backgroundColor = "red"
        document.querySelector('.text').innerText = "C'est le grand jour !!!"
        document.querySelector('.text').style.color = "#fff"
        document.querySelectorAll('.bloc').forEach(index => {
            index.style.backgroundColor = "#fff"
        })
        return
    }

    const diff = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor((difference % DAYS) / HOURS),
        minutes: Math.floor((difference % HOURS) / MINUTES),
        seconds: Math.floor(difference % MINUTES),
    }

    // document.querySelector('#days').innerText = diff.days
    // document.querySelector('#hours').innerText = diff.hours
    // document.querySelector('#minutes').innerText = diff.minutes
    // document.querySelector('#seconds').innerText = diff.seconds

    // window.setTimeout(refreshCountDown, 1000)

    updateDom(diff)

    window.setTimeout(() => {
        window.requestAnimationFrame(refreshCountDown)
    }, 1000)

}

function updateDom(diff) {
    if (previousDiff.days !== diff.days) {
        $days.innerText = diff.days
    }
    if (previousDiff.hours !== diff.hours) {
        $hours.innerText = diff.hours
    }
    if (previousDiff.minutes !== diff.minutes) {
        $minutes.innerText = diff.minutes
    }
    $seconds.innerText = diff.seconds
    previousDiff = diff
}

refreshCountDown()
