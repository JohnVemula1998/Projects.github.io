function factorial(n) {
    if(n==1) return 1;
    return n  * factorial(--n);
}
// let x = factorial(5);
// console.log(x);
let btn = document.getElementById('res');
btn.addEventListener('click',function(){
    let input = document.getElementById('input');
    let x = parseInt(input.value);
    //console.log(x);

    let res = factorial(x);
    console.log(res);
    //input.classList.add('d-none');
    let ans = document.getElementById('ans');
    ans.innerText = `Factorial of ${x} is: ${res}`;

});