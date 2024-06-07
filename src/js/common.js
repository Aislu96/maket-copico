const button =  document.querySelector('.banner__button');
const videoPlay = document.querySelector('.video__group');
const icon = document.querySelector('.video__cross-icon');
const overlay = document.querySelector('.overlay');



function toggleVideo() {
  videoPlay.classList.toggle('video__group_active');
  overlay.classList.toggle('active');
}

button.addEventListener('click', toggleVideo);
icon.addEventListener('click', toggleVideo);



const arrows =  document.querySelectorAll('.partners__item');
const text = document.querySelectorAll('.partners__text');

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click',function () {
    if(!arrows[i]) return;
    toggleText(i);
  });

  arrows[i].addEventListener('touchend', function (event) {
    // Предотвращаем действие по умолчанию для касания (например, прокрутку страницы)
    event.preventDefault();
    toggleText(i);
  });
}

function toggleText(index) {
  if (!arrows[index]) return;
  text[index].classList.toggle("partners__text_active");
}
