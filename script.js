const sagat = document.querySelector('.sagat');
const pipe = document.querySelector('.pipe');
const zangief = document.querySelector('.zangief');


function remove(){
    sagat.classList.remove('jump');

}

function jump() {
sagat.classList.add('jump');

setTimeout(remove, 500);

}

function loopGame() {
let pipePosition = pipe.offsetLeft;
let sagatPosition = +window.getComputedStyle(sagat).bottom.replace('px','');

if (pipePosition <= 120 && pipePosition > 0 && sagatPosition < 80) {

pipe.style.animation = 'none';
pipe.style.left = '${pipePosition}px';

pipe.style.animation = 'none';
pipe.style.bottom = '${pipePosition}px';

sagat.scr='./images/zangief.png';
sagat.style.width = '280px';

}
}

let loop = setInterval(loopGame, 10);

document.addEventListener('keydown', jump);