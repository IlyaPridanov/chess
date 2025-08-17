document.addEventListener('DOMContentLoaded', function () {
  function getRunningLineClone() {
    const runningLineContent = document.querySelector('.running-line__content');

    const texts = document.querySelectorAll('.running-line__text');
    texts.forEach(text => {
      const clone = text.cloneNode(true);
      runningLineContent.appendChild(clone);
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
      if (window.innerWidth <= 576) {
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

  getRunningLineClone();
  getStagesSlider();
});
