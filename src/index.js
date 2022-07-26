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

const showPopupComment = (imgObj) => {
  const modalContainer = document.querySelector('#modal_container');

  const modal = `<div class="modal">
  <img src=${imgObj[0].img} class="popup-image">
  <button class="btn-close" id="close-comment"><i class="fa-solid fa-xmark"></i></button>
  <h3>${imgObj[0].desc}</h3>
  <div class="description">
    <p>width: ${imgObj[0].width}</p>
    <p>height: ${imgObj[0].height}</p>
    <p>id: ${imgObj[0].id}</p>
    <p>color: ${imgObj[0].color}</p>
  </div>
</div>`;

  modalContainer.classList.add('show');
  modalContainer.innerHTML = modal;

  const closeComment = document.querySelector('#close-comment');
  closeComment.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
};

const photoWrapper = document.querySelector('.photos-wrapper');

const showCars = () => {
  const arr = [];
  asyncGetCall().then((value) => {
    for (let index = 0; index < value.length - 1; index += 1) {
      const obj = {
        id: value[index].id,
        img: value[index].urls.thumb,
        desc: value[index].description,
        color: value[index].color,
        width: value[index].width,
        height: value[index].height,
      };
      const url = value[index].urls.thumb;
      const b = document.createElement('div');
      b.classList.add('photo-item');
      b?.setAttribute('id', obj.id);
      b.innerHTML = `<img src="${url}" alt="photo" />
  <h3>Photo 1</h3>
  <div class="like-container">
    <i class="fa fa-heart"></i>
    <div class="like-counter">4</div>
  </div>
  <button class="open-comments">Comments</button>
  <button>Reservations</button>`;

      arr.push(obj);
      photoWrapper.appendChild(b);
    }

    const openComments = document.querySelectorAll('.open-comments');
    openComments.forEach((comment) => {
      comment.addEventListener('click', (e) => {
        const { id } = e.target.parentElement;
        const imgObj = arr.filter((img) => img.id === id);
        showPopupComment(imgObj);
      });
    });
  });
};

showCars();
