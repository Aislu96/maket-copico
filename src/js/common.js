const video =  document.querySelector('.video__button');
const videoPlay = document.querySelector('.video__group');
const videoContainer = document.querySelector('.video__img-container');

const crossIcon =  document.querySelector('.video__cross-icon');

function toggleVideo() {
  videoPlay.classList.toggle('show');
  videoContainer.classList.toggle('video__img-container_active');
}

function toggleCross() {
  videoContainer.classList.toggle('video__img-container_active');
  videoPlay.classList.toggle('show');
}

video.addEventListener('click', toggleVideo);
crossIcon.addEventListener('click', toggleCross);



