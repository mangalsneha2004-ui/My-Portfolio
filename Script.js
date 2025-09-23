
    $(document).ready(function () {
      $('.barra-nivel').each(function () {
        var el = $(this);
        var nivel = el.data('nivel');

        // Animate width
        el.animate({ width: nivel }, {
          duration: 1500,
          step: function (now) {
            el.text(Math.round(now) + "%");
          },
          complete: function () {
            el.text(nivel);
          }
        });
      });
    });

      $(document).ready(function () {
        $('.Projects .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,  
            dots: true,
            autoplay: false,
            slideTransition: 'linear',
            slideBy: 1,
            responsive: {
                0: { items: 1 },
                700: { items: 1 },
                900: { items: 2 },
                1100: { items: 3 }
            }
        });
    });
    const phrases = [
  "Frontend Developer.",
  "Web Designer.",
  "Frontend Developer.",
  "Web Designer."
];

const typedText = document.querySelector(".typed-text");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, charIndex);

  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

type();

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
  AOS.init();
