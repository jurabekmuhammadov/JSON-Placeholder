const photosBlock = document.querySelector(".photos__container");
const albumId = localStorage.getItem("albumId");

function getPhotosCard({ title, url }) {
  return `
    <div class="photos-card">
    <img src="${url}" alt="photo" />
      <p>${title}</p>
    </div>
  `;
}

const getPhotos = async () => {
  try {
    let photos = await getData(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    photos.map((photo) => {
      photosBlock.innerHTML += getPhotosCard(photo);
    });
  } catch (err) {
    console.log(err);
  }
};

getPhotos();
