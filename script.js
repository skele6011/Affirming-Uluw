document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById("img01");
    const closeBtn = document.getElementsByClassName("close")[0];
    const sahabaImage = document.querySelector('.sahaba-image');

    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    // Image modal functionality
    sahabaImage.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
