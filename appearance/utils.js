// Add transparency to menu
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    // Calculate scrolling distance and set threshold
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLimit = 100;
    // Add transparency if user scrolls below threshold
    if (distanceY > scrollLimit) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
});

// Show menu when sandwich is pressed
document.querySelector('.toggle-menu').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
    document.querySelector('.close-menu').classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('active');
});
