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
