// Importation des constantes
const header = document.querySelector('header');
let windowHeight = window.innerHeight;
    windowHeight=0;

// Declaration et developpement des fonctions
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > windowHeight);
});
