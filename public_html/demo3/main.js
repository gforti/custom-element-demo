import './custom-message.element.js';

document.querySelectorAll('custom-message').forEach( (elem) => {
    elem.addEventListener('delete-clicked', ()=>{
        console.log('delete clicked')
        elem.classList.add('hide')
    })
})

document.getElementById('show').addEventListener('click', ()=>{
    document.querySelectorAll('custom-message').forEach( (elem) => {
        elem.classList.remove('hide')

    })
})
       
       
        
       