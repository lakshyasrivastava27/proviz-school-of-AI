// Get modal elements
const modal = document.getElementById('applyModal');
const applyBtn = document.getElementById('applyBtn');
const closeBtn = document.querySelector('.close');

// Open modal
applyBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form validation
document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear any previous error messages
    clearErrors();

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const statement = document.getElementById('statement').value.trim();

    let hasError = false;

    // Name Validation
    if (name === "") {
        showError('name', 'Name is required.');
        hasError = true;
    }

    // Phone Validation (Simple phone number check)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError('phone', 'Please enter a valid phone number (10 digits).');
        hasError = true;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        hasError = true;
    }

    // Statement Validation
    if (statement === "") {
        showError('statement', 'Please provide a statement explaining why you want to join.');
        hasError = true;
    }

    // If no errors, simulate form submission
    if (!hasError) {
        alert('Application Submitted! We will get back to you soon.');
        modal.style.display = 'none';  // Close modal after submission
        document.getElementById('applicationForm').reset(); // Reset the form
    }
});

// Function to show error message next to invalid field
function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    // Insert error message below the input field
    inputField.parentNode.appendChild(errorDiv);
}

// Function to clear any error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

// Scroll to the top of the page function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to top button functionality
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = "↑";
scrollTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollTopButton);

// Show or hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Add click event to scroll-to-top button
scrollTopButton.addEventListener('click', scrollToTop);
