document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.main-navigation');

    if (toggle && navigation) {
        toggle.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        });

        navigation.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navigation.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }

    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();
});
