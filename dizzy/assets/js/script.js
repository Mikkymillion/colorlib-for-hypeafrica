


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
} 


 

// $(document).ready(
//   function(){
//     $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//       $(".mainmenu").css('background' , 'blue')
//           }
//     else {
//       $(".black").css('background' , '#555');
//     }
//   })

//   })

var navbar=document.querySelector('nav');
window.onscroll = function () {
  if (window.pageYOffset>0) {this.navbar.classList.add('navscroll')}
  else{
    this.navbar.classList.remove('navscroll')
  }
};

