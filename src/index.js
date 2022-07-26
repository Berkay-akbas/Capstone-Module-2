import './style.css';

const asyncGetCall = async () => {
  try {
    const username = 'gerandeklerk';
    const response = await fetch(`https://api.unsplash.com/users/${username}/photos?orientation=portrait&page=1&per_page=9&client_id=ORV6G4HML0wf1fJObg3OgNJTNx-asI0llrIPLPMpwYw
    `, {
      method: 'GET',

    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const photoWrapper = document.querySelector('.photos-wrapper');

const showCars = () => {
  asyncGetCall().then((value) => {
    for (let index = 0; index < value.length - 1; index += 1) {
      const url = value[index].urls.thumb;
      const b = document.createElement('div');
      b.classList.add('photo-item');
      b.innerHTML = `<img src="${url}" alt="photo" />
  <h3>Photo 1</h3>
  <div class="like-container">
    <i class="fa fa-heart"></i>
    <div class="like-counter">4</div>
  </div>
  <button>Comments</button>
  <button>Reservations</button>`;
      photoWrapper.appendChild(b);
    }
  });
};

showCars();
