const affectArrow = document.getElementById('affectiveArrow');

const affectHover = document.getElementById('affective');

affectArrow.addEventListener('click', () => {
    affectHover.style.opacity= "1.8";
})

const recogArrow = document.getElementById('recogArrow');
const recogRect = document.getElementById('recogRect');


recogArrow.addEventListener('click', () => {
   recogRect.style.transition ="height 2s ease";
    recogRect.style.height= "250px";

})