/* cambio color fondo 
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const elbody = document.querySelector('body');
    //const elbody = document.getElementById('body_id');
    elbody.style.backgroundColor = getRandomColor();
    console.log('hola');
    
});

function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("contenido cargado");
    const path = document.querySelector('.line-p');
    const pathLength = path.getTotalLength();
    console.log(pathLength);

    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    //scrolling
    window.addEventListener('scroll', () => {
        const docElem = document.documentElement;
        const bodyScrollTop = document.body.scrollTop;

        const scrollPercentage = getScrollPercentage(docElem.scrollTop, bodyScrollTop, docElem.scrollHeight, docElem.clientHeight);
        
        const drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
        
        const drawLength2 = pathLength2 * scrollPercentage;
        path2.style.strokeDashoffset = pathLength2 - drawLength2;
    });

    function getScrollPercentage(dSt, bSt, dSh, dCh){
        const percentage = (dSt + bSt) / (dSh - dCh);
        return percentage;
      }


});