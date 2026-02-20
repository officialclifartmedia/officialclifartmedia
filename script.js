'use strict';

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Handling
const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    // Replace with your own form submission logic
    fetch('/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        message.textContent = 'Form submitted successfully!';
    })
    .catch(error => {
        message.textContent = 'There was an error submitting the form.';
    });
});

// Gallery Interactive Features
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});
