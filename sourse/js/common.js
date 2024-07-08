"use strict";

import Swiper from "../libs/swiper/swiper-bundle.min.mjs";
import JSCCommon from "./JSCCommon.js";

const $ = jQuery;

function eventHandler() {
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

	const sProductSlider = new Swiper(".sArticle__slider--js", {
		spaceBetween: 8,
		watchOverflow: true,
		// spaceBetween: 0,
		slidesPerView: "auto",
		// freeMode: true,
		// loopFillGroupWithBlank: true,
		touchRatio: 0.4,
		slideToClickedSlide: true,
		// freeModeMomentum: true,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 4,
			},
		},
	});

  /* product slider with thumb */
  let prodCardThumb = new Swiper(".sProdCard-thumb-js-1", {
		slidesPerView: 3,
		spaceBetween: 20,
	});
	let prodCardSlider = new Swiper(".sProdCard-slider-js-1", {
    slidesPerView: 1,
		thumbs: {
			swiper: prodCardThumb,
		},
		navigation: {
			nextEl: ".arrow-wrap1 .swiper-button-next",
			prevEl: ".arrow-wrap1 .swiper-button-prev",
		},
		breakpoints: {
			1200: {
				navigation: {
          nextEl: ".arrow-wrapThumb1 .swiper-button-next",
          prevEl: ".arrow-wrapThumb1 .swiper-button-prev",
        },
			},
		}
	});

  /* 2 */
  
  let prodCardThumb2 = new Swiper(".sProdCard-thumb-js-2", {
		slidesPerView: 3,
		spaceBetween: 20,
    direction: 'horizontal',
    breakpoints: {
        1700: {
          direction: 'vertical',
        }
      }
	});

	let prodCardSlider2 = new Swiper(".sProdCard-slider-js-2", {
    slidesPerView: 1,
		thumbs: {
			swiper: prodCardThumb2,
		},
		navigation: {
			nextEl: ".arrow-wrap2 .swiper-button-next",
			prevEl: ".arrow-wrap2 .swiper-button-prev",
		},
		breakpoints: {
			1200: {
				navigation: {
          nextEl: ".arrow-wrapThumb2 .swiper-button-next",
          prevEl: ".arrow-wrapThumb2 .swiper-button-prev",
        },
			},
		}
	});

	/* nav */
	const menuItems = document.querySelectorAll(".menu-item-has-children");

	menuItems.forEach(item => {
		item.addEventListener("click", function (event) {
			event.preventDefault();
			event.stopPropagation();
			menuItems.forEach(otherItem => {
				if (otherItem !== item) {
					otherItem.classList.remove("active");
				}
			});

			item.classList.toggle("active");
		});
	});

	document.addEventListener("click", function (event) {
		if (!event.target.closest(".menu-item-has-children")) {
			menuItems.forEach(item => {
				item.classList.remove("active");
			});
		}
	});

	/* side sticky */

	let sidebar = document.querySelector(".sidebar-sticky");
	new hcSticky(sidebar, {
		stickTo: ".sticky-wrap",
		top: 10,
		bottomEnd: 0,
	});

	$(".filter-dropbdown__title").click(function () {
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
