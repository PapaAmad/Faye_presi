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

  gsap.from(".animate-btn", {
    scrollTrigger: {
      trigger: ".animate-btn",
      start: "top 80%"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  });

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

  gsap.from(".social-links", {
    scrollTrigger: {
      trigger: ".social-links",
      start: "top 80%"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

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

  gsap.from(".vision-content p", {
    scrollTrigger: {
      trigger: ".vision-section",
      start: "top 70%"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(".vision-icon", {
    scrollTrigger: {
      trigger: ".vision-section",
      start: "top 70%"
    },
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)"
  });
}

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

document.addEventListener('DOMContentLoaded', function() {
  /*const nom = prompt("Quel est votre nom ?");
  if (nom) {
    document.getElementById('candidatName').textContent = nom;
  }*/
  
  createMathBackground();
  //animateElements();
  
  /*Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });*/
});