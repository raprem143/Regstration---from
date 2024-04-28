document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regstration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if(username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('please fill in all fields');
            return;
        }
        console.log('Form submit: ',  {username, email, password});
    });
});