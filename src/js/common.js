const button =  document.querySelector('.banner__button');
const videoPlay = document.querySelector('.video__group');
const icon = document.querySelector('.video__cross-icon');
const overlay = document.querySelector('.overlay');



function toggleVideo() {
  videoPlay.classList.toggle('video__group_active');
  overlay.classList.toggle('active');
}

button.addEventListener('touchend', toggleVideo);
icon.addEventListener('touchend', toggleVideo);



const arrows =  document.querySelectorAll('.partners__item');
const text = document.querySelectorAll('.partners__text');

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('touchend',function () {
    if(!arrows[i]) return;
    text[i].classList.toggle("partners__text_active");
  });
}
