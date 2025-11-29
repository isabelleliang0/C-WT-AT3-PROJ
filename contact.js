// Get form and inputs
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Regex pattern to check input
const namePattern = /^[a-zA-Z\s]+$/; 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const messagePattern = /^.{1,}$/;

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent submission until recognise it's valid
    let valid = true;

    // Validate + error messages:
    // Validate name
    if (!namePattern.test(nameInput.value.trim())) {
        nameError.textContent = 'Name is required';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate email
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Valid email is required';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate message
    if (!messagePattern.test(messageInput.value.trim())) {
        messageError.textContent = 'Message cannot be empty';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    //Submits once validation is complete
    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
