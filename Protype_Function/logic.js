let array = [];
let input  = document.getElementById('length');
    let n = input.value;
    let N = parseInt(n);
let validate = document.getElementById('value');
validate.addEventListener('click',function(){
    let input  = document.getElementById('length');
    let val = document.getElementById('value');
    let n = input.value;
    let N = parseInt(n);
    for(let i = 0; i < N; i++){
        let element = document.createElement('input');
        let dis = document.getElementById("container");
        element.setAttribute('id',`val${i}`);
        element.classList.add('val');
        dis.appendChild(element);
        element.placeholder = `Enter the num ${i+1} `;
        element.value = "";
     
     }
     input.classList.add('d-none');
     val.classList.add('d-none');
});

// let btn = document.getElementById('count');
// btn.addEventListener('click',function(){
//     array = [];
//     let input  = document.getElementById('length');
//     let n = input.value;
//     let N = parseInt(n);
//     for(let i  = 0; i< N; i++ ) {
//         let x = document.getElementById(`val${i}`);
//         let val = x.value;
//         array.push(parseInt(val));
//     }
//     console.log(array);
// });

Array.prototype.PrimeNum = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        let count = 0;
        
        for(let j = 2; j<this[i];j++){
            if(this[i]%j===0){
                count++;
                break;
            }
        }arr.push(count);
    }console.log(arr);
    for(let k = 0;k<arr.length;k++){
        if(arr[k]==0){
        return true;
    }
    
    }return false;
    
}
let res = document.getElementById('res');
res.addEventListener('click',function(){
    array = [];
    let input  = document.getElementById('length');
    let n = input.value;
    let N = parseInt(n);
    for(let i  = 0; i< N; i++ ) {
        let x = document.getElementById(`val${i}`);
        let val = x.value;
        array.push(parseInt(val));
    }
    console.log(array);
    let ans = document.getElementById('ans');
    let x = array.PrimeNum();
    console.log(x);
    ans.innerText = x;
});

