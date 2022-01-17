const BASE_URL   = "https://api.unsplash.com";
const ACCESS_KEY = 'au3luBHL8OiRuyj2t6DLDpRL0jhGRNuLlKW2dLQ9dhs';
const SECRET_KEY = 'Ytk11_eMdFOsjPV82vDqGChCzr54iEyMm3s8fk3hHr4';





    fetch(`${BASE_URL}/photos/?client_id=${ACCESS_KEY}`)
    .then((res) => {
        return res.json();
    }).then((data) => {
            console.log(data);
            if(data.length>0){
                const container = document.getElementById('container');
                data.forEach(images => {
                    let image = document.createElement('img');
                    image.classList.add('image');
                    //console.log(`${images.links.download}`);
                    image.setAttribute('src',`${images.links.download}`);
                    container.appendChild(image);
                });
            }
    });



function randomImages(){
    const link = "https://source.unsplash.com/random/200x200?sig=";

    for(let i = 0; i<10; i++){
        let cont = document.getElementById('container');
        let image1 = document.createElement('img');
        image1.classList.add('image');
        
        let number = Math.floor(Math.random()*10000+Math.floor(Math.random()+1));

        if(number == number){
            number+Math.floor(Math.random()*20);
        }
        image1.setAttribute('src', `${link}${number}`);
        cont.appendChild(image1)
    
    }

    }
    let imageGenerator = setTimeout(randomImages,1000);
window.addEventListener('scroll',() => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        randomImages();
    }
});
