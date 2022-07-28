import count from '../modules/itemsCounter.js';

document.body.innerHTML = `<header class="header">
<div class="logo">Imagery Logo</div>
<nav class="navbar">
  <ul class="navbar-list">
    <li class="cars">Cars</li>
    <li class="nature">Nature</li>
    <li class="architecture">Architecture</li>
  </ul>
</nav>
</header>
<section class="main">
<div class="photos-wrapper">
</div>
</section>
<div class="modal-container" id="modal_container"></div>
<footer>
<p class="footer-text">Created by Microverse under CC license</p>
</footer>`;

describe('Test the counter', () => {
  test('Count total items 1 item', () => {
    const b = document.createElement('div');
    b.classList.add('photo-item');
    const photoWrapper = document.querySelector('.photos-wrapper');
    photoWrapper.appendChild(b);
    expect(count()).toBe(1);
  });
  test('Count total items 0 item', () => {
    const photoItem = document.querySelector('.photo-item');
    photoItem.remove();
    expect(count()).toBe(0);
  });
});