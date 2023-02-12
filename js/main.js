
const light = document.querySelectorAll('.light');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const btn = document.querySelector('.btn');

let colorNow = 1;




btn.addEventListener('click', () => {
  
    changeColor()
    changeColorB()
    setInterval(changeColorB, 2500, 500, 2000);
    setInterval(changeColor, 2500, 500, 2000);
})

const changeColor = () => {
   
    light[colorNow].className = 'light';
   
    colorNow = colorNow + 1;

    const colorActive = () => {
        green.classList.toggle('_active');
        red.classList.toggle('_active');
        yellow.classList.toggle('_active');
    }
    
    
   if(colorNow > 2) {
    colorNow = 0;
   } 
   
    const nowLight = light[colorNow];
    console.log(nowLight)
    nowLight.classList.add(nowLight.getAttribute('id'))
    colorActive()

}
 

const lightB = document.querySelectorAll('.light_b');
const redB = document.getElementById('red_b');
const yellowB = document.getElementById('yellow_b');
const greenB = document.getElementById('green_b');

let colorNowB = 2;



const changeColorB = () => {
   
    lightB[colorNowB].className = 'light_b';
   
    colorNowB = colorNowB + 1;

    const colorActiveB = () => {
        greenB.classList.toggle('_active_b');
        redB.classList.toggle('_active_b');
        yellowB.classList.toggle('_active_b');
    }
    
    
   if(colorNowB > 2) {
    colorNowB = 0;
   } 
   
    const nowLightB = lightB[colorNowB];
    

    nowLightB.classList.add(nowLightB.getAttribute('id'))
    colorActiveB();

}