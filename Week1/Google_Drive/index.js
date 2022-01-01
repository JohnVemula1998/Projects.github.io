let btn =  document.getElementById('change_view');
let img = 'v';
btn.addEventListener('click',function(){
    let x = document.getElementById('container');
    let y = document.getElementById('view');
    x.classList.toggle('container1'); 
    
    if(img == 'v') {
        y.src = 'table_view.svg';
        img = 't';
    }else{
        y.src = "view_module.svg"
        img = 'v';
    }
});
