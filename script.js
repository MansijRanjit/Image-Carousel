const dotsContainer = document.getElementById('dots-container');
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-item');

let currentSlide = 0;

createDots();

//create nav dots
function createDots() { 
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    }
    showSlide(currentSlide);
}
  
//display slide in carousel
function showSlide(index) {
  const dots = document.querySelectorAll('.dot');

  currentSlide = index;
  carousel.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);//adds the class 'active' to the dot at the current index while removing it from all other dots
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds