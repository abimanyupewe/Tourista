document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});

// search
// Function to handle dropdown selection
function setupDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const items = dropdown.nextElementSibling.querySelectorAll('.dropdown-item');

    items.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        const selectedText = this.textContent; // Get item text
        dropdown.textContent = selectedText; // Update button text
      });
    });
  }

  // Setup all dropdowns
  setupDropdown('destinationDropdown');
  setupDropdown('budgetDropdown');
  setupDropdown('typeDropdown');