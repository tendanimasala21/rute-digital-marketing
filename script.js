// Get the button that opens the form
const openFormBtn = document.getElementById("openFormBtn");

// Get the form popup
const popupForm = document.getElementById("popupForm");

// Get the button that closes the form
const closeFormBtn = document.getElementById("closeFormBtn");

// When the user clicks the button, open the form
openFormBtn.onclick = function() {
    popupForm.style.display = "block";
}

// When the user clicks on the close button, close the form
closeFormBtn.onclick = function() {
    popupForm.style.display = "none";
}

// Close the form if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}

const carousel = document.querySelector('.carousel');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentIndex = 0;

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carousel.children.length - 1;
    updateCarousel();
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < carousel.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = carousel.children[0].offsetWidth + 20; // Add gap
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Select the elements
const menuIcon = document.getElementById('menu-icon');
const navItems = document.querySelector('.nav-items');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-items
    navItems.classList.toggle('active');
});
