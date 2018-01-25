# Building basic slide show / image changer using pure javascript
Certainly we won't make a slideshow which will be production ready. It just for practicing js and building basic logic to work with js. In this video we will discuss about following 

## document.querySelector('css selector')
its a scaler type selector in js dom. it will return element which can be change directly. it will take css selector as argument

## document.querySelectorAll('css selector');
its a composite type selector in js dom. It will return array of elements. So in order to change a element we have to extract single element by their index. it will take css selector as argument

## 5 css selector where first 4 is supported by querySelector and querySelectorAll   
* tag (`body`)
* id (`#hello`)
* class (`.hello`)
* attribute(`[id='hello']`)
* pseudo(`a:hover`)   

## element.setAttribute('attribute_name', 'attribute_value')
using setAttribute function we can set and get attribute value of a element. In today's example we set src attribute of img element.       

## element.addEventListener('event_name', function);

addEventListener first parameter is event name second parameter is a function. using addEventListener method we can attach a event to a element.   

## setInterval(function, time);
setInterval first parameter is a function which will be execute every certain time later again and again  which state in 2nd parameter.   

## slideshow using js  

Based on state above method and selector I have showed how we can make a slideshow. Hope you will be make as well, nicer than me. Take care. Here is code for sneak peek 

~~~js
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
~~~







