const showMessage = (msg, status) => {
  const displayMessage = document.querySelector('.message');
  displayMessage.classList.add(status);
  displayMessage.innerHTML = msg;

  setTimeout(() => {
    displayMessage.innerHTML = '';
    displayMessage.classList.remove(status);
  }, 2000);
};

const getImageAndDescription = (imgObj) => {
  return `<img src=${imgObj[0].img} class="popup-image">
      <button class="btn-close" id="close-comment"><i class="fa-solid fa-xmark"></i></button>
      <h3>${imgObj[0].desc}</h3>
      <div class="description">
        <p>width: ${imgObj[0].width}</p>
        <p>height: ${imgObj[0].height}</p>
        <p>id: ${imgObj[0].id}</p>
        <p>color: ${imgObj[0].color}</p>
      </div>`;
};

const getCommentForm = () => {
  const form = document.createElement('form');
  form.classList.add('comment-form');
  form.innerHTML = `<h3>Add a comment</h3>
      <p class="message"></p>
      <input type="text" class="user-name" required placeholder="Your name">
      <textarea class="user-comment" cols="30" rows="10" placeholder="Your Insights"></textarea>
      <button class="btn btn-add-comment">Comment</button>`;
  return form;
};

export { showMessage, getImageAndDescription, getCommentForm };