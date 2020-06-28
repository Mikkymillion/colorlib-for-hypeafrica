


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
} 


 

// Using jquery
// var navbar=document.querySelector('main_menu');
// window.onscroll = function () {
//   if (window.pageYOffset>0) {this.navbar.classList.add('menu_fixed animated fadeInDown')}
//   else{
//     this.navbar.classList.remove('menu_fixed animated fadeInDown')
//   }
// };


  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');}
  }
  )


 