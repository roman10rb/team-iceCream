window.onload=function(){window.onscroll=function(e){var n=window.scrollY;n>300&&(progressBar(),scrollbarAnimation(),n=null)};var e=document.querySelector(".isShowBtn");window.onscroll=function(){window.scrollY>700?e.classList.remove("isShowBtn_hide"):window.scrollY<700&&e.classList.add("isShowBtn_hide")},e.onclick=function(){window.scrollTo(0,0)}},window.addEventListener("load",(function(){function e(e){var n=e||document.querySelectorAll("[data-digits-counter]");n&&n.forEach((function(e){!function(e){var n=null,o=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,i=parseInt(e.innerHTML),t=0,r=function(l){n||(n=l);var a=Math.min((l-n)/o,1);e.innerHTML=Math.floor(a*(t+i)),a<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}(e)}))}var n=new IntersectionObserver((function(n,o){n.forEach((function(n){if(n.isIntersecting){var i=n.target,t=i.querySelectorAll("[data-digits-counter]");t.length&&e(t),o.unobserve(i)}}))}),{threshold:.3}),o=document.querySelectorAll(".hero, .section");o.length&&o.forEach((function(e){n.observe(e)}))})),new Swiper(".image-slider",{slidesPerView:1,autoplay:{delay:4e3,disableOnInteraction:!1},speed:2e3,loop:!0,effect:"cube",cubeEffect:{shadow:!1}}),new Swiper(".container-slider",{pagination:{el:".swiper-pagination",clickable:!0},centeredSlides:!0,slideToClickedSlide:!0,loop:!0,slidesPerView:1,effect:"slide",flipEffect:{slideShadows:!0,limitRotation:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});
//# sourceMappingURL=index.1f166948.js.map