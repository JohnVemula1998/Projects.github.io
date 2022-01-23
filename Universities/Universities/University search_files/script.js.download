let url = "http://universities.hipolabs.com/search?country=";
const input = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click',() =>{
    console.log(input.value);
    var temp = '';
    document.getElementById('data').innerHTML = '';
    fetch(url+`${input.value}`)
.then(res => {
    return res.json();
}).then(data => {
    console.log(data);
    if(data.length>0){
        
        data.forEach(university => {
            temp += `<tr>
            <td>${university.name}</td>
            <td>${university.country}</td>
            <td><a href="${university.web_pages}">${university.web_pages}</a></td></tr>`
        });
        document.getElementById('data').innerHTML = temp;
        input.value = '';
    }
})
})



