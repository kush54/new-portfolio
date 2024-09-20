const nameElement = document.querySelector('.name');
const taglineElement = document.querySelector('.tagline');
const scrollIndicator = document.querySelector('.scroll-indicator');

const nameText = "Kuljeet Singh Chouhan";
const taglineText = "Full Stack Developer | Problem Solver";

function typeText(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            element.style.opacity = 1;
            if (element === taglineElement) {
                scrollIndicator.style.opacity = 1;
            }
        }
    }, delay);
}

setTimeout(() => {
    typeText(nameElement, nameText, 100);
}, 500);

setTimeout(() => {
    typeText(taglineElement, taglineText, 100);
}, nameText.length * 100 + 1000);

// Particle Generation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 20 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = Math.random() * 2 + 2 + 's';
        particle.style.opacity = Math.random();
        particlesContainer.appendChild(particle);
    }
}

// Move particles with mouse
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const xOffset = (Math.random() - 0.5) * 30; // Random x offset
        const yOffset = (Math.random() - 0.5) * 30; // Random y offset
        particle.style.transform = `translate(${(e.clientX * 0.05) + xOffset}px, ${(e.clientY * 0.05) + yOffset}px)`;
    });
});

createParticles();



// // about page 
// document.addEventListener('DOMContentLoaded', () => {
//     const aboutSection = document.querySelector('#about');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = 1;
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     });

//     observer.observe(aboutSection);
// });


// const sections = document.querySelectorAll('.about-section, .projects-section, .contact-section');

// function checkScroll() {
//     const triggerPoint = window.innerHeight / 1.2; // Change this value to adjust when the animation triggers

//     sections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top;

//         if (sectionTop < triggerPoint) {
//             section.classList.add('visible');
//             section.classList.remove('hidden');
//         }
//     });
// }

// window.addEventListener('scroll', checkScroll);
// window.addEventListener('load', checkScroll); // Check on load in case sections are already in view
