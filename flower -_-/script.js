var sizeElements = document.getElementsByClassName("size");

function changeColor(element) {
  for (var i = 0; i < sizeElements.length; i++) {
    sizeElements[i].style.backgroundColor = "";
  }
  element.style.backgroundColor = "#46A358";
}
var counterElement = document.getElementById("counter");
var counterValue = 1;

function increaseNumber() {
  counterValue++;
  counterElement.innerText = counterValue;
}

function decreaseNumber() {
  if (counterValue > 1) {
    counterValue--;
    counterElement.innerText = counterValue;
  }
}
(function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('red');
    });
  })();
function qwe(){
  alert( 'you already in this page')
}
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // задайте желаемую скорость автоматического прокручивания
  });
});