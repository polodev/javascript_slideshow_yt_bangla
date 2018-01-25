var images = [
  'images/image-slider-1.jpg',
  'images/image-slider-2.jpg',
  'images/image-slider-3.jpg',
  'images/image-slider-4.jpg',
  'images/image-slider-5.jpg'
];
var index = 0;
var buttons = document.querySelectorAll('button');
var image = document.querySelector('img');
function prevFn () {
  index--;
  index = index < 0 ? images.length - 1: index;
  console.log(index);
  image.setAttribute('src', images[index]);
}
function nextFn () {
  index++;
  index = index > images.length - 1 ? 0 : index;
  console.log(index);
  image.setAttribute('src', images[index]);
}
buttons[0].addEventListener('click', prevFn);
buttons[1].addEventListener('click', nextFn);


setInterval(nextFn, 1000);