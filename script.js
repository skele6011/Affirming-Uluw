document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    function closeMenu() {
        sidebar.classList.remove('active');
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
