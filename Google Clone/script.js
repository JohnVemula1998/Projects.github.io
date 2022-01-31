const search = document.getElementById('search-input');

search.addEventListener("keydown",function(event){
    if(event.code === 'Enter'){
        searching();
    }
});

function searching() {
    const input = search.value;
    window.location.href = `https://www.google.com/search?q=${input}&oq=${input}&aqs=chrome.0.69i59j46i67i433j0i67l3j46i67i199i465j0i67i433j0i512l3.1938j0j15&sourceid=chrome&ie=UTF-8`
}