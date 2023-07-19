var bars = document.querySelector('.bars-toggle');
var showMenu = document.querySelector('.menu-list');
var showOverlay = document.querySelector('.overlay');
var iconOut = document.querySelector('.out-icon');
bars.addEventListener('click', function () {
    showMenu.classList.toggle('show-menu');
    showOverlay.classList.toggle('show-overlay');
    iconOut.classList.toggle('show-out-icon');
});
showOverlay.addEventListener('click',()=>{
    showMenu.classList.remove('show-menu');
    showOverlay.classList.remove('show-overlay');
})
iconOut .addEventListener('click',()=>{
    showMenu.classList.remove('show-menu');
    showOverlay.classList.remove('show-overlay');
})