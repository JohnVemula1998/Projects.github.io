let count = "";
let num1 = document.getElementById('key1');
num1.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
    count = count+ '1';
    inp.innerText= count;
    }else{
        alert('PinLength Not Valid');
    }
});
let num2 = document.getElementById('key2');
num2.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '2';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num3 = document.getElementById('key3');
num3.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '3';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num4 = document.getElementById('key4');
num4.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '4';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num5 = document.getElementById('key5');
num5.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '5';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num6 = document.getElementById('key6');
num6.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '6';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num7 = document.getElementById('key7');
num7.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '7';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num8 = document.getElementById('key8');
num8.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '8';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num9 = document.getElementById('key9');
num9.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '9';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});
let num0 = document.getElementById('key11');
num0.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    if(4>count.length){
        count = count+ '0';
        inp.innerText= count;
        }else{
            alert('PinLength Not Valid');
        }
});


let del = document.getElementById('key10');
del.addEventListener('click',_ => {
    let inp = document.getElementById('input');
    count = count.split('');
    count.pop(); 
    count = count.join('');
    inp.innerText= count;
});
let done = document.getElementById('key12');
done.addEventListener('click',_ =>{
    let inp = document.getElementById('input');
    if(count =='1234'){
        inp.innerText= "Welcome!";
        inp.style.color='#00ff00';
        let hint = document.getElementById('hint');
        hint.classList.add('d-none');
        count = '';
    }else{
        inp.innerText= "Incorrect try again!";
        inp.style.color='#ff0000';
        let hint = document.getElementById('hint');
        hint.classList.remove('d-none');
        count = '';
    }
    
    
});