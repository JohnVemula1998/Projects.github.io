let start = document.getElementById('start');

start.addEventListener('click',function(){
    let Qz_game = document.getElementById('quizz_box');
    Qz_game.classList.remove('d-none');
    start.classList.add('d-none');
    let score = document.getElementById('score');
let time = document.getElementById('time_count');
let skip = document.getElementById('skip');
let totalScore = document.getElementById('totalScore');

let count = 0;
let scoreCount = 0;
let timeCount = 0;
let QuesSet = document.querySelectorAll('.question_set');
let Ans = document.querySelectorAll('.question_set .qz_ans input');

skip.addEventListener('click',function(){
    game();
    timeCount = 10;
});
Ans.forEach(function(Action){
    Action.addEventListener('click',function(){
        setTimeout(function(){
            game();
            timeCount = 10;
        },500);

        var valid = this.getAttribute('valid');
        if(valid == 'valid'){
            scoreCount += 20;
            score.innerText = scoreCount;
            totalScore.innerText = scoreCount;
        }else{
            scoreCount += 0;
            score.innerText = scoreCount;
            totalScore.innerText = scoreCount;
        }

    });
});
function game(){
    count +=1;
    for(var i=0; i < QuesSet.length; i++){
        QuesSet[i].className = 'question_set';
    }
    QuesSet[count].className = 'question_set active';
    if(count == 5){
        skip.style.display = 'none';
        clearInterval(timeDuration);
        time.innerText = 0;
    }
}

var timeDuration = setInterval(function(){
    if(timeCount == 10){
        timeCount = 0;
    }
    timeCount += 1
    time.innerText = timeCount;
    if(time.innerText == '10'){
        game();
    }
}, 1000);

});
function rain(){
    let amount = 50;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i');

        let size = Math.random()*5;
        
        let posx = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posx + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration =1 + duration + 's';
        body.appendChild(drop);
        i++;
    }
}
rain();
// setting up game

