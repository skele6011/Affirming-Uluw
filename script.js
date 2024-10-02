function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector("main");
    sidebar.classList.toggle("active");
    
    // Adjust main content margin
    if (sidebar.classList.contains("active")) {
        main.style.marginTop = sidebar.offsetHeight + "px";
    } else {
        main.style.marginTop = "0";
    }
}

// Close the menu when clicking outside of it
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("active");
        document.querySelector("main").style.marginTop = "0";
    }
});

// Adjust layout on window resize
window.addEventListener("resize", function() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector("main");
    
    if (sidebar.classList.contains("active")) {
        main.style.marginTop = sidebar.offsetHeight + "px";
    } else {
        main.style.marginTop = "0";
    }
});
