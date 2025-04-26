// Language Toggle
function toggleLanguage(lang) {
    document.querySelectorAll('.lang-en, .lang-es').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.lang-' + lang).forEach(el => {
        el.classList.remove('hidden');
    });

    // Update the URL param without reloading
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
}

// Read initial language from URL or default to English
function initializeLanguage() {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    const lang = params.get('lang');
    console.log(lang);
    toggleLanguage(lang || 'en');  // default to 'en' if not found
}

// Hook into page load
document.addEventListener('DOMContentLoaded', initializeLanguage);
