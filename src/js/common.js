const button =  document.querySelector('.banner__button');
const videoPlay = document.querySelector('.video__group');
const icon = document.querySelector('.video__cross-icon');
const overlay = document.querySelector('.overlay');



function toggleVideo() {
  videoPlay.classList.toggle('video__group_active');
  overlay.classList.toggle('active');
}
if (button && icon) {

  button.addEventListener('click', toggleVideo);
  icon.addEventListener('click', toggleVideo);
}



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
let videoShow = true;

document.addEventListener('scroll', ()=>videoFixed(window.scrollY>=500 & videoShow & window.innerWidth >= 900));
document.querySelector('.video__fixed--close').addEventListener('click', ()=> {
  videoShow = false;
  videoFixed(false);
  document.removeEventListener('scroll', videoFixed);
});


function videoFixed(show) {
  const videoFix = document.querySelector('.video__fixed');
  const videoFixClose = document.querySelector('.video__fixed--close');
  if(show) {
    videoFix.style.position = 'fixed';
    videoFix.style.zIndex = '100';
    videoFix.style.top = 'auto';
    videoFix.style.transform = 'translateY(0)';
    videoFix.style.bottom = '2rem';
    videoFix.style.display = 'block';
    videoFixClose.style.display = 'block';
  } else {
    videoFix.style.position = null;
    videoFix.style.zIndex = null;
    videoFix.style.top = null;
    videoFix.style.transform = null;
    videoFix.style.bottom = null;
    videoFixClose.style.display = null;
  }
}
// Устанавливаем таймер на автовоспроизведение через 10 секунд
setTimeout(function(event) {
  var iframe = document.querySelectorAll('.video__iframe');
  iframe.forEach((item)=> {
    let url = item.getAttribute('src') + '?autoplay=1&mute=1&loop=1';
    item.setAttribute('src', url);
  });
}, 3000);
