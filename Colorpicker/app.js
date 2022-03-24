console.log(num)
var num = 4;


function closure(a){
  function closureFun(b){
      console.log(a+b);
  }
  closureFun(4);
}

closure(3);


//recursive function
function count(a){

    const b = a+1;
    console.log(a)
    if(b < 10){
        count(b);
    }
    else{
        console.log('end of recusion')
    }
}

count(1);






let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");
let color8 = document.getElementById("color8");

color1.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'red';
});
color1.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});

color2.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'green';
});
color2.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color3.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'blue';
});
color3.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color4.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'yellow';
});
color4.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color5.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'orange';
});
color5.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color6.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'cyan';
});
color6.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color7.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'greenyellow';
});
color7.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});
color8.addEventListener('mouseover',()=>{
    document.getElementById('container').style.backgroundColor = 'greenyellow';
});
color8.addEventListener('mouseout',()=>{
    document.getElementById('container').style.backgroundColor = 'white';
});





