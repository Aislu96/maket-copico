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







const arrows =  document.querySelectorAll('.partners__img');
const text = document.querySelectorAll('.partners__text');



for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click',function () {
    if(!arrows[i]) return;
    text[i].classList.toggle("partners__text_active");
  });
}
