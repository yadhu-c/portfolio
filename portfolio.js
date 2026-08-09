const form = document.querySelector('form');
form.addEventListener('submit' , function(event){
    event.preventDefault();

    form.style.display='none';
    const message = document.createElement('p');
    message.textContent = ' Thanks! your message has been sent.';
    form.parentElement.appendChild(message);
});

const menuToggle = document.querySelector('#menu-toggle');
const navList = document.querySelector('nav.links ul');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('open');
});
