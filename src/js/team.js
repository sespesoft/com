const swiperSlider = document.querySelector('.swiper-wrapper .swiper-slide');
const testimonials = [...document.querySelectorAll('.swiper-wrapper .swiper-slide .testimonial-content')];
const indicators = [...document.querySelectorAll('.swiper-wrapper .pagination span')];
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
let lengthItems = testimonials.length - 1;


next.onclick = function() {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function(){
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
  swiperSlider.style.transform = `translateX(-${active * 100}%)`;

  let last_active_dot = document.querySelector('.pagination span.active');
  last_active_dot.classList.remove('active');
  indicators[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(()=> {next.click()}, 3000);
}

indicators.forEach((span, key) => {
  span.addEventListener('click', ()=> {
    active = key;
    reloadSlider();
  });
});

window.onresize = function() {
  reloadSlider();
};
