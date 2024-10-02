function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector("main");
    sidebar.classList.toggle("active");
    
    // On larger screens, toggle main content margin
    if (window.innerWidth >= 769) {
        main.style.marginLeft = sidebar.classList.contains("active") ? "250px" : "0";
    }
}

// Close the menu when clicking outside of it
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("active");
        if (window.innerWidth >= 769) {
            document.querySelector("main").style.marginLeft = "0";
        }
    }
});

// Adjust layout on window resize
window.addEventListener("resize", function() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector("main");
    
    if (window.innerWidth < 769) {
        main.style.marginLeft = "0";
    } else {
        main.style.marginLeft = sidebar.classList.contains("active") ? "250px" : "0";
    }
});
