let start = document.getElementById('start');
start.addEventListener('click',function(){
    let cont = document.getElementById('container');
    cont.classList.remove('d-none');
    start.classList.add('d-none');
    let count = 0;
    var array = [];
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then(response =>{
    response.json().then(
        data => {
            console.log(data.results);
            if(data.results.length > 0){
                var temp = document.getElementById('quizbody');
                count +=1; 
                data.results.forEach((questions) => {
                    var QuizzBox = document.createElement('div');
                    QuizzBox.classList.add('ques-set');
                    QuizzBox.setAttribute('id',`${count}`)
                    if(count==1){
                        QuizzBox.classList.add('active');
                    }
                    let quesSet = document.createElement('p');
                    let AnsSet = document.createElement('div'); 
                    AnsSet.classList.add('ansSet');
                    quesSet.innerText =count+". "+ questions.question;
                    let Ans = questions.correct_answer;
                    let Options = questions.incorrect_answers;
                    Options.splice(Math.floor(Math.random()*4),0,Ans);
                    for(let i = 0; i<Options.length;i++){
                        let answers = document.createElement('div');
                        answers.classList.add('answer');
                        let input = document.createElement('input');
                        input.type = 'radio';
                        let optInp = document.createElement('span');
                        if(Options[i]==Ans){
                            array.push(Ans);
                            optInp.innerText = Options[i];
                            input.setAttribute('name', `ans${count}`);
                            input.setAttribute('valid','valid');
                            answers.appendChild(input);
                            answers.appendChild(optInp);
                            AnsSet.appendChild(answers);
                        }else {
                            optInp.innerText = Options[i];
                            input.setAttribute('name', `ans${count}`);
                            answers.appendChild(input);
                            answers.appendChild(optInp);
                            AnsSet.appendChild(answers);
                        }
                        
                    }
                    count++;
                    QuizzBox.appendChild(quesSet);
                    QuizzBox.appendChild(AnsSet);
                    temp.appendChild(QuizzBox);
                });
                


            }
            let totalAmount = document.createElement('span');
            totalAmount.setAttribute('id','TotalAmount');
            totalAmount.classList.add('ques-set');
             temp.appendChild(totalAmount);
            let footer = document.createElement('div');
                footer.classList.add('quizz-footer');
                let skip = document.createElement('span');
                skip.classList.add('btn1');
                skip.setAttribute('id','skip');
                skip.innerText = 'Skip';
                footer.appendChild(skip);
                temp.appendChild(footer);
                console.log(array);
        });
});

const myTimeout = setTimeout(Gameon,1000);
function Gameon(){
    let count1 = 0;
    let scoreCount =0;
    let timeCount = 0;
    let score =document.getElementById('score');
    var skip = document.getElementById('skip');
    let totalScore = document.getElementById('TotalAmount');
    let time = document.getElementById('time_count');
    let QuestionSet = document.querySelectorAll('.ques-set');
    let answer = document.querySelectorAll('.ques-set .answer input');
    console.log(answer.length);
    

    skip.addEventListener('click',function(){
        game();
        timeCount = 30;
        console.log(count1)
    });

    // answer.forEach(function(Action){
    //     Action.addEventListener('click',function(){
    //         setTimeout(function(){
    //             game();
    //             timeCount = 30;
    //         },500);
    //         var valid = this.getAttribute('valid');
    //         console.log(valid);
    //     if(valid == 'valid'){
    //         scoreCount += 20;
    //         score.innerText = scoreCount;
    //         totalScore.innerText = `Your total Score is ${scoreCount}`; 
    //     }else {
    //         scoreCount += 0;
    //         score.innerText = scoreCount;
    //         totalScore.innerText = `Your total Score is ${scoreCount}`;
    //     }
    //     });
    // });

    let winningAmount = [10000,40000,80000,160000,320000,640000,1250000,25000000,5000000,10000000];

    answer.forEach(function(Action){
        Action.addEventListener('click',function(){
            let valid = this.getAttribute('valid');
            if(valid=='valid'){
                console.log('valid');
                scoreCount = winningAmount[count1];
                score.innerText = winningAmount[count1];
                totalScore.innerText = `Your Winning Amout is ${scoreCount} Indian Rupees`; 
                game();
                timeCount = 30;
            }else{
                stop();
                if(scoreCount<1000){
                    totalScore.innerText = `Better Luck NextTime!`;
                }else{
                    totalScore.innerText = `Your Winning Amout is ${scoreCount} Indian Rupees`;
                }
                
                
            }
        });
    });

    
    function game(){
        count1 +=1;
        for(var i=0; i < QuestionSet.length; i++){
            QuestionSet[i].className = 'ques-set';
        }
        QuestionSet[count1].className = 'ques-set active';
        if(count1 == 10){
            skip.style.display = 'none';
            clearInterval(timeDuration);
            time.innerText = 0;
        }
    }

    function stop(){
        QuestionSet[count1].className = 'ques-set';
        skip.style.display = 'none';
            clearInterval(timeDuration);
            time.innerText = 0;
        let winning = document.getElementById('TotalAmount');
        winning.classList.add('active');
    }

    var timeDuration = setInterval(function(){
        if(timeCount == 30){
            timeCount = 0;
        }
        timeCount += 1
        time.innerText = timeCount;
        if(time.innerText == '30'){
            game();
        }
    }, 1000);
}




});