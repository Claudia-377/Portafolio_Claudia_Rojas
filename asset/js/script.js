
document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const buttons = document.querySelectorAll('.btn-ver-mas'); 
    

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        if (name && email && message) {
            formMessage.textContent = 'Gracias por tu mensaje, ' + name + '. Te contactaremos pronto.';
            formMessage.classList.add('text-success');
            form.reset();
        } else {
            formMessage.textContent = 'Por favor, completa todos los campos.';
            formMessage.classList.add('text-danger');
        }
        
    });
});
function verMas(id) {
    const section = document.getElementById(id);
    if (section.classList.contains('d-none')) {
        section.classList.remove('d-none');
        button.style.backgroundColor = '#8C5A4F';
    } else {
        section.classList.add('d-none');
         button.style.backgroundColor = '#590E1C';
    }
}



