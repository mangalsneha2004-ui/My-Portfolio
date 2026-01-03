// 🌙 DARK–LIGHT THEME TOGGLE (DESKTOP + MOBILE)

const themeButtons = document.querySelectorAll(".themeBtn");
const themeIcons = document.querySelectorAll(".themeIcon");

function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeIcons.forEach(icon => {
        icon.classList.toggle("fa-moon", !isDark);
        icon.classList.toggle("fa-sun", isDark);
    });
}

themeButtons.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
});

// about us progressbar js 
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
    
// slider js 
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

    // header animated text js 
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

// header fixed at the top on scroll 
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });

  // aos animation script 
  AOS.init();

// contact us form js 
function sendMessage() {
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value;
    if (!name || !phone || !email || !message) {
        alertify.error("⚠️ Please fill all required fields!");
        return;
    }
    const fullMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const phoneNumber = "918955990845";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
     alertify.success("✅ Your message is ready to send on WhatsApp!");
    document.getElementById("contactForm").reset();
}