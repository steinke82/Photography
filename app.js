const menu = ()=> {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
});
}
menu();

var slideIndex = 1;
showSlidesP(slideIndex);
showSlidesC(slideIndex);
showSlidesN(slideIndex);

function plusSlidesP(n) {
  showSlidesP(slideIndex += n);
}

function plusSlidesC(n) {
  showSlidesC(slideIndex += n);
}

function plusSlidesN(n) {
  showSlidesN(slideIndex += n);
}

function showSlidesP(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPeople");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesCity");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesN(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesNature");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

$(".about").click(function(){
  $(".About").css("display","block");
  $(".nav-links").css("display","none");
});

  $(".people").click(function(){
    $(".People").css("display","block");
    $(".nav-links").css("display","none");
  });

  $(".city").click(function(){
    $(".City").css("display","block");
    $(".nav-links").css("display","none");
  });

  $(".nature").click(function(){
    $(".Nature").css("display","block");
    $(".nav-links").css("display","none");
  });

  $(".contact").click(function(){
    $(".Contact").css("display","block");
    $(".nav-links").css("display","none");
  });

  $(".close").click(function(){
    $(".slideshowContainer").css("display","none");
    $(".nav-links").css("display","flex");
  });
