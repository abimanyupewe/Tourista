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
// nav end

// info
// Fungsi untuk animasi counter
const counters = document.querySelectorAll('h1[data-target]');
const speed = 10000; // Semakin kecil nilainya, semakin cepat animasinya

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace(',', '');
    const increment = target / speed;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment).toLocaleString();
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  updateCount();
});
// info end

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

// slider
let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Pastikan index dalam rentang valid
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Geser slider ke posisi yang benar
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Render Feather Icons
feather.replace();
// search end

// blog
let currentSlideBlog = 0;

// Fungsi untuk menampilkan slide blog
function showSlideBlog(index) {
  const sliderWrapperBlog = document.querySelector('.slider-wrapper-blog'); // Wrapper khusus untuk blog
  const slidesBlog = document.querySelectorAll('.slider-wrapper-blog .slide');
  const totalSlidesBlog = slidesBlog.length;

  // Validasi indeks
  if (index >= totalSlidesBlog) {
    currentSlideBlog = 0;
  } else if (index < 0) {
    currentSlideBlog = totalSlidesBlog - 1;
  } else {
    currentSlideBlog = index;
  }

  // Geser slider blog
  sliderWrapperBlog.style.transition = 'transform 0.5s ease';
  sliderWrapperBlog.style.transform = `translateX(-${currentSlideBlog * 100}%)`;
}

// Fungsi untuk menggeser ke slide berikutnya
function nextSlideBlog() {
  showSlideBlog(currentSlideBlog + 1);
}

// Fungsi untuk menggeser ke slide sebelumnya
function prevSlideBlog() {
  showSlideBlog(currentSlideBlog - 1);
}

// Inisialisasi slide pertama
showSlideBlog(currentSlideBlog);

// blog end