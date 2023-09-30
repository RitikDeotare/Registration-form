const form = document.getElementById('registration-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    let isValid = true;

    if (fullName.length < 5) {
        setError('name-error', 'Name must be at least 5 characters');
        isValid = false;
    }

    if (!email.includes('@')) {
        setError('email-error', 'Enter a valid email address');
        isValid = false;
    }

    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        setError('phone-error', 'Enter a valid 10-digit phone number');
        isValid = false;
    }

    if (password === 'password' || password.length < 8 || password === fullName) {
        setError('password-error', 'Password is not strong');
        isValid = false;
    }

    if (password !== confirmPassword) {
        setError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        // Form is valid, you can submit it here
        alert('Form submitted successfully!');
    }
});

function setError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.innerText = '';
    
    });
}