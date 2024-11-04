gsap.from('.container', {opacity: 0, duration: 3  })
gsap.from('.navbar', {opacity: 0, duration: 1, delay: 1, stagger: .6})
gsap.from('.parTwo', {opacity: 0, duration: 3, delay: 3,})
gsap.from('.main-button', {x: -200, opacity: 0, delay: 3, duration: 2})
gsap.from('.image', {x: 200, opacity: 0, delay: 3, duration: 3 })

gsap.to('.par',{
    text: 'Hello, my name is Kate.',
    duration: 3,
    repeat: 0,
})

const imageMotivation = document.querySelector('.card-one');

imageMotivation.addEventListener('click', imageClicked);

function imageClicked(){
    window.open('https://puppies-for-sale-own.glitch.me/index.html', '_blank');
}

const imagePuppies = document.querySelector('.card-two');

imagePuppies.addEventListener('click', imageClickedTwo);

function imageClickedTwo(){
    window.open('https://daily-routine-website.glitch.me/', '_blank');
}

const imageWeather = document.querySelector('.card-three');

imageWeather.addEventListener('click', imageClickedThree);

function imageClickedThree(){
    window.open('https://todo-list-own.glitch.me/', '_blank');
}

const imageLawyer = document.querySelector('.card-four');

imageLawyer.addEventListener('click', imageClickedFour);

function imageClickedFour(){
    window.open('https://daily-motivation-app.glitch.me/', '_blank');
}

const imagePlan = document.querySelector('.card-five');

imagePlan.addEventListener('click', imageClickedFive);

function imageClickedFive(){
    window.open ('https://relax-waves-timer.glitch.me/', '_blank');
}



const imageMeditation = document.querySelector('.card-six');

imageMeditation.addEventListener('click', imageClickedSix);

function imageClickedSix(){
    window.open('https://api-weather-own.glitch.me/', '_blank');
}

const imageFilms = document.querySelector('.cardSeven');

imageFilms.addEventListener('click', imageClickedSeven);

function imageClickedSeven(){
    window.open('https://films-search-own.glitch.me', '_blank');
}

const imageRoutine = document.querySelector('.cardEight');

imageRoutine.addEventListener('click', imageClickedEight);

function imageClickedEight(){
    window.open('https://daily-routine-website.glitch.me', '_blank');
}

const imageTimer = document.querySelector('.cardNine');

imageTimer.addEventListener('click', imageClickedNine);

function imageClickedNine(){
    window.open('https://relax-waves-timer.glitch.me/', '_blank');
}

// Get the button:
let myButton = document.querySelector(".myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


