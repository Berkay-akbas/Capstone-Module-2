import './style.css';

const openComment = document.querySelector('#open-comment');
const modalContainer = document.querySelector('#modal_container');
const closeComment = document.querySelector('#close-comment');
const modal = document.querySelector('.modal');

openComment.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

closeComment.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});