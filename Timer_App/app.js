const playBtn = document.getElementById('play');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('reset'); 
const minute = document.getElementById('minute');
const clearLapbtn = document.getElementById('lap-clear');
const outerCircle = document.getElementById('outer-circle');
const sec = document.getElementById('sec');
const msec = document.getElementById('msec');
const laps = document.getElementById('laps');

let isPlay = true;
let milSecCounter = 0;
let secCounter = 0;
let minCounter = 0;
let lapCount = 1;
let startTimer = null;

let apollo = function(){
    milSecCounter++;
    minute.innerHTML = `${minCounter} :&nbsp; `;
    sec.innerHTML = `${secCounter} : &nbsp;`;
    msec.innerText = milSecCounter;
    if(milSecCounter==100){
        secCounter++;
        milSecCounter=0;
        if(secCounter==60){
            minCounter++;
            secCounter = 00;
        } 
    }
}


const displayBtn = _ =>{
    lapBtn.classList.remove('d-none');
    resetBtn.classList.remove('d-none');
}
const play = _ => {
    if(isPlay){
        startTimer = setInterval(apollo,10);
        playBtn.innerText = 'Pause';
        isPlay = false;
        outerCircle.classList.add('outer1');
        outerCircle.classList.remove('outer2');
    }else{
        clearInterval(startTimer);
        playBtn.innerText = 'Play'
        isPlay = true;
        outerCircle.classList.remove('outer1');
        outerCircle.classList.add('outer2');
    }
    displayBtn();
}
const resetHandler = _ =>{
    window.location.reload();
}

const lap = _ => {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');


    li.classList.add('lap-item');
    number.classList.add('number');
    timeStamp.classList.add('time-stamp');

    number.innerText =`#${lapCount}` 
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${milSecCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    lapCount++;
}
 const clearAll = _ => {
     laps.innerHTML = '';
     lapCount = 1;
 }

playBtn.addEventListener('click',play);
resetBtn.addEventListener('click',resetHandler);
lapBtn.addEventListener('click',lap);
clearLapbtn.addEventListener('click',clearAll);