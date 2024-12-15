document.addEventListener('DOMContentLoaded', function(){
    const colorBox = document.getElementById('color-box');
    const btn = document.getElementById('change-color-btn');


    btn.addEventListener('click', getRandomColor);
    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        colorBox.style.background = `rgba(${r}, ${g}, ${b})`;
    }
});