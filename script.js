
document.addEventListener("DOMContentLoaded", function () {

    const title = document.querySelector(".hero h2");

    if (!title) return;

    const phrases = [
        "Développeur Web Junior",
        "Intégrateur Web",
        "Passionné par le développement web"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        title.textContent = currentPhrase.substring(0, charIndex);

        if (!deleting && charIndex === currentPhrase.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 400);
            return;
        }

        setTimeout(typeEffect, deleting ? 45 : 90);
    }

    title.textContent = "";
    typeEffect();

});
