let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let x = '';

//console.log(inp);
btn.addEventListener('click',function(){
    let x = inp.value;
    let N = parseInt(x);
    let res = document.getElementById('ans');
    let li = document.createElement('li');
    res.innerText = '';
for(let i = 1; i <= N;i++){
    let x ='';
    let li = document.createElement('li');
    if(i%3===0&&i%5===0){
        x="FizzBuzz";
        li.innerText = '"'+x+'"';
    }else if(i%3===0){
        x = 'Fizz';
        li.innerText = '"'+x+'"';
    }else if(i%5 ===0){
        x = 'Buzz';
        li.innerText = '"'+x+'"';
    }else {
        li.innerText = i;
    }
    res.appendChild(li);

}
    
    
});
 