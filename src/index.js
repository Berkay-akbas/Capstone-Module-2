import './style.css';
import { getLikes, postLikes } from './likes.js';
import { getComments, postComments, countComments } from './comments.js';
import count from './itemsCounter.js';

const cars = document.querySelector('.cars');
const nature = document.querySelector('.nature');
const arch = document.querySelector('.architecture');

const asyncGetCall = async (photographer) => {
  try {
    const username = photographer;
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

const showMessage = (msg, status) => {
  const displayMessage = document.querySelector('.message');
  displayMessage.classList.add(status);
  displayMessage.innerHTML = msg;

  setTimeout(() => {
    displayMessage.innerHTML = '';
    displayMessage.classList.remove(status);
  }, 2000);
};

const showPopupComment = (imgObj) => {
  const modalContainer = document.querySelector('#modal_container');
  modalContainer.classList.add('show');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const commentsDiv = document.createElement('div');
  commentsDiv.classList.add('comments-list');

  const content = `<img src=${imgObj[0].img} class="popup-image">
      <button class="btn-close" id="close-comment"><i class="fa-solid fa-xmark"></i></button>
      <h3>${imgObj[0].desc}</h3>
      <div class="description">
        <p>width: ${imgObj[0].width}</p>
        <p>height: ${imgObj[0].height}</p>
        <p>id: ${imgObj[0].id}</p>
        <p>color: ${imgObj[0].color}</p>
      </div>`;

  const commentForm = `<form class="comment-form">
            <h3>Add a comment</h3>
            <p class="message"></p>
            <input type="text" class="user-name" required placeholder="Your name">
            <textarea class="user-comment" cols="30" rows="10" placeholder="Your Insights"></textarea>
            <button class="btn btn-add-comment">Comment</button>
          </form>`;

  getComments(imgObj[0].id).then((values) => {
    const numOfComments = countComments(values);
    commentsDiv.innerHTML += `<h3>Comments (${numOfComments})</h3>`;
    if (numOfComments > 0) {
      values.forEach((value) => {
        commentsDiv.innerHTML += `<p>${value.creation_date} ${value.username}: ${value.comment}</p>`;
      });
    }
  }).then(() => {
    modal.innerHTML = content;
    modal.appendChild(commentsDiv);
    modal.innerHTML += commentForm;
    modalContainer.appendChild(modal);

    const btnAddComment = document.querySelector('.btn-add-comment');
    btnAddComment.addEventListener('click', (e) => {
      e.preventDefault();
      const userName = document.querySelector('.user-name');
      const userComment = document.querySelector('.user-comment');
      postComments(imgObj[0].id, userName.value, userComment.value).then((status) => {
        if (status === 201) {
          showMessage('Comment Added Successfully', 'success');
        } else {
          showMessage('There is some error', 'error');
        }
        userName.value = '';
        userComment.value = '';
      });
    });

    const closeComment = document.querySelector('#close-comment');
    closeComment.addEventListener('click', () => {
      modalContainer.classList.remove('show');
      modalContainer.removeChild(modal);
    });
  });
};

const photoWrapper = document.querySelector('.photos-wrapper');
const showlist = (photographer) => {
  const arr = [];
  photoWrapper.innerHTML = '';
  asyncGetCall(photographer).then((value) => {
    for (let index = 0; index < 8; index += 1) {
      const obj = {
        id: value[index].id,
        img: value[index].urls.thumb,
        desc: value[index].description,
        color: value[index].color,
        width: value[index].width,
        height: value[index].height,
      };
      const url = value[index].urls.thumb;
      const { id } = value[index];
      const b = document.createElement('div');
      b.classList.add('photo-item');
      b?.setAttribute('id', obj.id);
      b.innerHTML = `<img src="${url}" alt="photo" />
  <h3>Id: ${id}</h3>
  <div class="like-container">
    <i class="fa fa-heart" id="like"></i>
    <div class="like-counter"></div>
  </div>
  <button class="open-comments">Comments</button>
  <button>Reservations</button>`;
      arr.push(obj);
      photoWrapper.appendChild(b);
    }
    const heart = document.querySelectorAll('.fa-heart');
    heart.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.toggle('transform-active');
        setTimeout(() => {
          element.classList.remove('transform-active');
        }, 1000);
      });
    });
    count();
    const counter = count();
    if (photographer === 'ixography') {
      cars.innerHTML = `Cars (${counter})`;
      nature.innerHTML = 'Nature';
      arch.innerHTML = 'Architecture ';
    } else if (photographer === 'parrish') {
      arch.innerHTML = `Architecture (${counter})`;
      nature.innerHTML = 'Nature';
      cars.innerHTML = 'Cars';
    } else if (photographer === 'gerandeklerk') {
      nature.innerHTML = `Nature (${counter})`;
      arch.innerHTML = 'Architecture';
      cars.innerHTML = 'Cars';
    }

    const openComments = document.querySelectorAll('.open-comments');
    openComments.forEach((comment) => {
      comment.addEventListener('click', (e) => {
        const { id } = e.target.parentElement;
        const imgObj = arr.filter((img) => img.id === id);
        showPopupComment(imgObj);
      });
    });

    const likeButton = document.querySelectorAll('.fa-heart');

    likeButton.forEach((button) => {
      button.addEventListener('mouseup', (e) => {
        const { id } = e.target.parentElement.parentElement;
        postLikes(id).then((status) => {
          if (status === 201) {
            const count = e.target.nextElementSibling.innerHTML;
            e.target.nextElementSibling.innerHTML = parseInt(count, 10) + 1;
          }
        });
      });
    });
  });

  getLikes().then((value) => {
    const counter = document.querySelectorAll('.like-counter');
    counter.forEach((item) => {
      const { id } = item.parentElement.parentElement;

      const totalLikes = value.filter((obj) => obj.item_id === id);

      if (totalLikes[0] !== undefined) {
        item.innerHTML = `${totalLikes[0].likes}`;
      } else {
        item.innerHTML = '0';
      }
    });
  });
};

showlist('ixography');

arch.addEventListener('click', () => {
  showlist('parrish');
});

nature.addEventListener('click', () => {
  showlist('gerandeklerk');
});

cars.addEventListener('click', () => {
  showlist('ixography');
});
