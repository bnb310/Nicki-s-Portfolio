'use strict';

function Platformer () {
    $('#projects').html(`
    <img src = 'https://i.imgur.com/80Z9yLS.png' alt = 'Platformer Screenshot' class = 'details'>
    <p>An Application to find video game Platform information.</p>
    <ul class = 'projectInfo'>
     <li>Made with love using HTML, JavaScript, and CSS</li>
     <li><a href = 'https://github.com/bnb310/Platformer' target = '_blank'>Repository</a></li>
     <li><a href = 'https://bnb310.github.io/Platformer/' target = '_blank'>Live Application</a></li>
    </ul>
    <button class = 'back' type = 'button'><img src = 'https://i.imgur.com/qjOvyR5.png?1' class = 'button'></button>
    `)
}

function HollowKnight () {
    $('#projects').html(`
    <img src = 'https://i.imgur.com/ffdYdGd.png' alt = 'Quiz App Screenshot' class = 'details'>
    <p>Hollow Knight Quiz Application, a quiz to test  your knowledge of the Metroidvania game 'Hollow Knight'.</p>
    <ul class = 'projectInfo'>
     <li>Made with love using HTML, JavaScript, and CSS</li>
     <li><a href = 'https://github.com/bnb310/FinishedQuizApp' target = '_blank'>Repository</a></li>
     <li><a href = 'https://bnb310.github.io/FinishedQuizApp/' target = '_blank'>Live Application</a></li>
    </ul>
    <button class = 'back' type = 'button'><img src = 'https://i.imgur.com/qjOvyR5.png?1' class = 'button'></button>
    `)
}

function Back () {
    $('#projects').html(`
        <img src = 'https://i.imgur.com/80Z9yLS.png' class = 'projects Platformer'>
        <img src = 'https://i.imgur.com/ffdYdGd.png' class = 'projects HollowKnight'>
        <p>Click a project above to view details</p>
    `)
}

function watchPortfolio () {
    $('#projects').on('click', '.Platformer', function(event) {
        Platformer ();
    })
    $('#projects').on('click', '.HollowKnight', function(event) {
        HollowKnight ();
    })
    $('#projects').on('click', '.back', function(event) {
        Back ();
    })
}

$(watchPortfolio)