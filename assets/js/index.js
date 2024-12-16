
'use strict';

const siteHeader = document.getElementById('header');
const siteHeaderHeight = siteHeader.offsetHeight;

window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if(top > siteHeaderHeight) {
        siteHeader.classList.add('fixed');
    } else {
        siteHeader.classList.remove('fixed');
    }
}, false);

// Form Validation 
function sendEmail(){
  let emailInput = document.getElementById('email').value;

  if(emailInput.includes('@') && emailInput.includes('.com')){    
    alert('Thanks For Subscribe')
  }else{
    alert("Please Enter Your Email...")
  }
}

// swiper slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        1399: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
      },
  });