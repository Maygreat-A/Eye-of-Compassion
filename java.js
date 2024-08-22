let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex and reset to 0 if end is reached
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call showSlides() again after 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 5000);
}
const hairstylesLink = document.getElementById('hairstyles-link');
const reservationsLink = document.getElementById('reservations-link');
const stylistsLink = document.getElementById('stylists-link');
const pricingLink = document.getElementById('pricing-link');

// Add attributes for accessibility
hairstylesLink.setAttribute('role', 'button');
hairstylesLink.setAttribute('aria-label', 'Visit Hairstyles Gallery');

reservationsLink.setAttribute('role', 'button');
reservationsLink.setAttribute('aria-label', 'Make Reservations');

stylistsLink.setAttribute('role', 'button');
stylistsLink.setAttribute('aria-label', 'Meet Our Stylists');

pricingLink.setAttribute('role', 'button');
pricingLink.setAttribute('aria-label', 'View Pricing');

const hairstylesButton = document.getElementById('hairstyles-button');
const reservationsButton = document.getElementById('reservations-button');
const stylistsButton = document.getElementById('stylists-button');
const pricingButton = document.getElementById('pricing-button');

// Add click event listeners
hairstylesButton.addEventListener('click', function() {
    // Perform action for Hairstyles Gallery
    console.log('Clicked Hairstyles Gallery button');
    // Add your logic here, such as navigating to a specific page or showing content.
});

reservationsButton.addEventListener('click', function() {
    // Perform action for Reservations
    console.log('Clicked Reservations button');
    // Add your logic here.
});

stylistsButton.addEventListener('click', function() {
    // Perform action for Our Stylists
    console.log('Clicked Our Stylists button');
    // Add your logic here.
});

pricingButton.addEventListener('click', function() {
    // Perform action for Pricing
    console.log('Clicked Pricing button');
    // Add your logic here.
});