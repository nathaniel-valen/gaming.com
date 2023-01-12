    // Team 3 - Gaming.com
    // ======================
    // 2272003 - Ravel Setiady
    // 2272028 - Nathaniel Valentino Robert 

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
 
});

function myalert() { 
    alert("Produk berhasil ditambahkan ke keranjang!"); 
}