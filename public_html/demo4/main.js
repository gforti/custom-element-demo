import './score-card.element.js';

setInterval(()=>{
    document.querySelector('score-card').dataset.score = Math.floor(Math.random() * 100) +1
}, 1000)