let input  = document.getElementById('inp');
    let n = input.value;
    let N = parseInt(n);
let gen_btn = document.getElementById('gen');
gen_btn.addEventListener('click',function(){
    let input  = document.getElementById('inp');
    let n = input.value;
    let N = parseInt(n);
    let container = document.getElementById('container');
    let ans = document.getElementById('ans');
    //console.log(n);
    for(let i = 0; i < N; i++){
        let val = document.createElement('input');
        val.setAttribute('id',`val${i}`);
        val.classList.add('val');
        container.appendChild(val);
        val.placeholder = `Enter Num${i+1}`;
        val.value = '';     
    }
    gen_btn.classList.add('d-none');
    input.classList.add('d-none');
    ans.classList.remove('d-none');

});

function MinNumber(...num){
    let min = num[0];
    for(let i = 1; i<num.length;i++){
        if(min>num[i]){
            min = num[i];
        }
    }return min;
}
//MinNumber(...array);
let res = document.getElementById('res');
res.addEventListener('click',function(){
    let arr = [];
    let input  = document.getElementById('inp');
    let n = input.value;
    let N = parseInt(n);
    for(let i = 0; i<N;i++){
        let val = document.getElementById(`val${i}`);
        let x = val.value;
        x = parseInt(x);
        arr.push(x);
    }
    console.log(arr);
    let result = MinNumber(...arr);
    let answer = document.getElementById('ans');
    answer.innerText ="Minimum Number is: "+ result;
    console.log(result);
});