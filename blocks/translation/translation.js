function initGTranslate() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.onload = () => {
    if (typeof googleTranslateElementInit === 'function') {
      window.googleTranslateElementInit();
    }
  };
  script.async = true;
  script.defer = true;
  document.body.append(script);
}

window.googleTranslateElementInit = function () {
  // eslint-disable-next-line no-new, no-undef
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
};

export default async function decorate(block) {
  const gTranslate = document.createElement('div');
  // Set the id attribute
  gTranslate.id = 'google_translate_element';
  block.append(gTranslate);
  initGTranslate();
}
