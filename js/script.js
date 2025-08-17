document.addEventListener('DOMContentLoaded', function () {
  function getRunningLineClone() {
    const runningLineContent = document.querySelectorAll('.running-line__content');

    function runningLineClone(container) {
      const texts = document.querySelectorAll('.running-line__text');
      texts.forEach(text => {
        const clone = text.cloneNode(true);
        container.appendChild(clone);
      });
    }

    runningLineContent.forEach(item => {
      runningLineClone(item);
    });
  };

  function getStagesSlider() {
    let blockSliderInstance = null;
    const sliderContainers = document.querySelector('.stages');

    function getBlockSlider(slider) {
      if (slider) {
        const container = slider.querySelector('.swiper-container');
        const slides = slider.querySelectorAll('.swiper-slide');
        const next = slider.querySelector('.btn-next');
        const prev = slider.querySelector('.btn-prev');
        const pagination = slider.querySelector('.swiper-pagination');
        const loop = false;
        const direction = 'horizontal';
        const autoHeight = false;

        if (slides.length >= 2) {
          return new window.Swiper(container, {
            direction: direction,
            loop: loop,
            autoHeight: autoHeight,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
              nextEl: next,
              prevEl: prev,
            },
            pagination: {
              el: pagination,
              clickable: true,
            },
          });
        }
      }
    }

    function handleSliderForMobile() {
      if (window.matchMedia("(width <= 576px)").matches) {
        if (!blockSliderInstance) {
          blockSliderInstance = getBlockSlider(sliderContainers);
        }
      } else {
        if (blockSliderInstance && typeof blockSliderInstance.destroy === 'function') {
          blockSliderInstance.destroy(true, true);
          blockSliderInstance = null;
        }
      }
    }

    handleSliderForMobile();
    window.addEventListener('resize', handleSliderForMobile);
  }

  function getPersonsSlider() {
    const sliderContainers = document.querySelector('.persons');

    function getBlockSlider(slider) {
      if (slider) {
        const container = slider.querySelector('.swiper-container');
        const slides = slider.querySelectorAll('.swiper-slide');
        const next = slider.querySelector('.btn-next');
        const prev = slider.querySelector('.btn-prev');
        const pagination = slider.querySelector('.swiper-pagination');
        const loop = true;
        const direction = 'horizontal';
        const autoHeight = false;
        const breakpoints = {
          320: {
            slidesPerView: 1,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        };

        if (slides.length >= 2) {
          return new window.Swiper(container, {
            direction: direction,
            loop: loop,
            autoHeight: autoHeight,
            autoplay: true,
            autoplaySpeed: 4,
            navigation: {
              nextEl: next,
              prevEl: prev,
            },
            pagination: {
              el: pagination,
              clickable: true,
              type: 'fraction',
            },
            breakpoints: breakpoints,
          });
        }
      }
    }

    getBlockSlider(sliderContainers);

  }

  getRunningLineClone();
  getStagesSlider();
  getPersonsSlider();
});
