document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');

    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
});
