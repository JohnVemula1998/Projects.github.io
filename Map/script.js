var map;
var mapevent;
let log_data = [];
if(localStorage.getItem('data')){
  log_data= JSON.parse(localStorage.getItem('data')) 
}
navigator.geolocation.getCurrentPosition(onSuccess,onError);


function onSuccess(event) {

    const coordinates =[event.coords.latitude,event.coords.longitude]
    map = L.map('map').setView(coordinates, 13);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BVpBcbD8mKYWKj4xonFl",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>',
      crossOrigin: true,
    }
  ).addTo(map);

  let theMarker ={};

  map.on("click", function (mapEvent) {
    //console.log(mapEvent);
    let left = document.getElementById('left');
    left.classList.remove('d-none')
    if(theMarker!=undefined){
        map.removeLayer(theMarker);
    }
    const currentLocation = [mapEvent.latlng.lat,mapEvent.latlng.lng];
    theMarker = L.marker(currentLocation).addTo(map);
    let addBtn = document.getElementById('addBtn');
    let option = document.getElementById('options');
    let duration = document.getElementById('duration');
    let list = document.getElementById('list');
    let listcontents = '';
    addBtn.addEventListener('click',(event) => {
      event.preventDefault();
      const title = option.value;
      const time = duration.value;
      const data = {
        title:title,
        time:time
      }
      // console.log(title);
      // console.log(time);
      
     
      theMarker.bindPopup(`<b>${title}<b> ${time}min`).openPopup()
      
      // option.value = '';
      // duration.value = '';
      log_data.push(data)
      localStorage.setItem('data',JSON.stringify(log_data))
      console.log(log_data)
      console.log(log_data.length)
      if(log_data.length>0){
        log_data.forEach(item => {
          
          listcontents += `<div class="listItems"><h2> ${item.title}</h2>
          <p>&nbsp${item.time} min</p></div>`
          
        });
        list.innerHTML = listcontents;
        listContents = "";
       
      }
     
      

    });
    
  });



}

function onError(){
    alert("can't fetch the location")
}





// map = L.map("map").setView([0, 0], 13);
//   L.tileLayer(
//     "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BVpBcbD8mKYWKj4xonFl",
//     {
//       attribution:
//         '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
//       crossOrigin: true,
//     }
//   ).addTo(map);


// var leafletIcon = L.icon ({
//     iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
//     shadowUrl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
//     iconSize : [38,95],
//     iconAnchor : [22, 94],
//     shadowAnchor : [4,62],
//     popupAnchor: [12, -90]
// })

// var marker = L.marker([51.5, -0.09],{icon:leafletIcon}).addTo(map);

// var LeafletIcon = L.Icon.extend({
//     options : {
//         shadowUrl:'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
//         iconSize : [38,95],
//         shadowSize : [50,64],
//         icoAnchor : [22,94],
//         shadowAnchor : [4,62],
//         popupAnchor :[-3,-76]
//     }
// })
// var greenIcon = new LeafletIcon({iconUrl:'https://leafletjs.com/examples/custom-icons/leaf-green.png'})
// var redIcon = new LeafletIcon({iconUrl:'https://leafletjs.com/examples/custom-icons/leaf-red.png'});
// var orangeIcon = new LeafletIcon({iconUrl:'https://leafletjs.com/examples/custom-icons/leaf-orange.png'})

// var marker = L.marker([51.5, -0.08], { icon:greenIcon }).addTo(map);
// var marker = L.marker([51.5, -0.09], { icon: redIcon }).addTo(map);
// var marker = L.marker([51.5, -0.11], { icon: orangeIcon }).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color : 'red',
//     fillcolor: '#f03',
//     fillOpacity : 0.5,
//     radius :500,
// }).addTo(map);

// marker.bindPopup('<b>Hey There! </b><br> I am a marker').openPopup();
