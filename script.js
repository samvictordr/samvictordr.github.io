document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const toggleButton = document.getElementById('toggleButton');

const textElements = document.querySelectorAll('.toggle-text');

function toggleLanguage(sectionId, language) {
  const section = document.getElementById(sectionId);

  textElements.forEach(element => {
    const translatedText = element.getAttribute(`data-${language}`);
    if (translatedText) {
      element.textContent = translatedText;
    }
  });
}

let currentLanguage = 'en';

toggleButton.addEventListener('click', () => {
  if (currentLanguage === 'en') {
    currentLanguage = 'jp';
  } else {
    currentLanguage = 'en';
  }

  toggleLanguage('about', currentLanguage);
});

