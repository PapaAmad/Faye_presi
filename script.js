gsap.registerPlugin(ScrollTrigger);

function animateElements() {
  gsap.from(".animate-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".animate-text", {
    scrollTrigger: {
      trigger: ".animate-text",
      start: "top 80%"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  /*gsap.from(".animate-btn", {
    scrollTrigger: {
      trigger: ".animate-btn",
      start: "top 80%"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  });*/

  gsap.from(".animate-item", {
    scrollTrigger: {
      trigger: ".programme",
      start: "top 60%"
    },
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  /*gsap.from(".social-links", {
    scrollTrigger: {
      trigger: ".social-links",
      start: "top 80%"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });*/

  gsap.from(".gallery-item", {
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 60%"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

/*gsap.from(".vision-content p", {
scrollTrigger: {
trigger: ".vision-section",
start: "top 70%"
},
duration: 1,
y: 30,
opacity: 1, /* Assurez que l’opacité va à 1 pour que le texte soit visible 
stagger: 0.3,
ease: "power3.out"
});*/

}

function initProgrammeSlider() {
  const slides = document.querySelectorAll('.programme-slide');
  const dotsContainer = document.querySelector('.dots');
  const prevBtn = document.querySelector('.nav-btn.prev');
  const nextBtn = document.querySelector('.nav-btn.next');
  let currentSlide = 0;
  let slideInterval;

  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  function updateSlides() {
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100%)';
    });
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform = 'translateX(0)';
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  slideInterval = setInterval(nextSlide, 10000);

  const programmeSection = document.querySelector('.programme');
  programmeSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
  programmeSection.addEventListener('mouseleave', resetInterval);
}

document.addEventListener('DOMContentLoaded', function() {
  createMathBackground();
  animateElements();
  initProgrammeSlider();
  
  Fancybox.bind("[data-fancybox]", {
  });
});

function createMathBackground() {
  const mathBg = document.getElementById('mathBg');
  const symbols = ['∫', '∑', 'π', '∞', '√', '∂', 'λ', 'θ', 'Δ', 'Ω'];
  for (let i = 0; i < 100; i++) {
    const symbol = document.createElement('div');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.position = 'absolute';
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.top = `${Math.random() * 100}%`;
    symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
    symbol.style.opacity = `${Math.random() * 0.5 + 0.1}`;
    symbol.style.transform = `rotate(${Math.random() * 360}deg)`;
    mathBg.appendChild(symbol);
  }
}