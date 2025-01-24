// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        window.location.href = "home.html"; // Alihkan ke halaman menu
    } else {
        alert('Harap isi username dan password!');
    }
});
