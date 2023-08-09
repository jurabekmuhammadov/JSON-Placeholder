const albumBlock = document.querySelector(".album__container");
const userId = localStorage.getItem("userId");

function getAlbumCard({ id, title }) {
  return `
    <div class="album-card">
      <p>${title}</p>
      <a href="photos.html" onClick="getAlbumId(${id})">Photos</a>
    </div>
  `;
}

const getAlbum = async () => {
  try {
    let album = await getData(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    album.map((album) => {
      albumBlock.innerHTML += getAlbumCard(album);
    });
  } catch (err) {
    console.log(err);
  }
};

getAlbum();

function getAlbumId(id) {
  localStorage.setItem("albumId", id);
}

getAlbumId();
