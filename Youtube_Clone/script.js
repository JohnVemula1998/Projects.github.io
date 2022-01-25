const videoCardContainer = document.querySelector('.video-container');

const API_KEY = "AIzaSyAXpnXwsI_bPPy3gQR-Tq5I95g-kdqG5S4";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    })
  })
  .catch((error) => {
    console.log(error);
  });

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      //console.log(video_data);
      makeVideoCard(video_data);
    });
};


const makeVideoCard = (data) => {
    videoCardContainer.innerHTML +=`

    <div class="video" onclick = "location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumbnail" />
        <div class="content">
          <img src="${data.channelThumbnail}" class="channel-icon" alt="" />
          <div class="info">
              <h4 class="title">${data.snippet.title}</h4>
              <div class="channel-name"><p>
              ${data.snippet.channelTitle}
                  </p></div>
          </div>
        </div>
      </div>
    `;
}


//search bar


const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

let searchlink = 'https://www.youtube.com/results?search_query=';
searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchlink + searchInput.value;
    }
})
