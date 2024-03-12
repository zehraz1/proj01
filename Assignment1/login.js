document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const messageBox = document.getElementById('message-box');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching user data.');
                }
                return response.json();
            })
            .then(data => {
                const user = data.find(user => user.name === username && user.email === password);
                if (user) {
                    showMessage('Login successful', 'success');
                } else {
                    showMessage('Invalid username or password', 'error');
                }
            })
            .catch(error => {
                alert('Error fetching user data.'); // Display alert if API call fails
                console.error('Error:', error);
            });
    });

    function showMessage(message, type) {
        const messageText = messageBox.querySelector('p');
        messageText.textContent = message;
        messageBox.className = type;
        messageBox.classList.remove('hidden');
        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 3000);
    }
});
