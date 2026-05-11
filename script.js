const typingElement = document.querySelector('.typing');

if (typingElement) {

    const words = [
        'Computer Science Student',
        'Frontend Developer',
        'Programmer',
        'Gamer'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        }
        else {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
}


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

const hiddenElements = document.querySelectorAll('.fade-up');
hiddenElements.forEach((el) => observer.observe(el));


const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {

    toggleButton.addEventListener('click', () => {

        document.body.classList.toggle('light');

        if (document.body.classList.contains('light')) {
            toggleButton.textContent = '🌙';
        }
        else {
            toggleButton.textContent = '☀';
        }

    });
}