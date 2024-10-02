console.log("External script loaded");

function toggleMenu() {
    console.log("External toggle menu called");
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    console.log("Sidebar classes:", sidebar.className);
}

// Check if the inline function exists and use it if the external one fails
if (typeof inlineToggleMenu === "function") {
    console.log("Using inline toggle function as fallback");
    window.toggleMenu = inlineToggleMenu;
}

console.log("Toggle function:", window.toggleMenu);
