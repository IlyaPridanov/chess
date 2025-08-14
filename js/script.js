document.addEventListener('DOMContentLoaded', function() {
  function getRunningLineClone () {
    const runningLineContent = document.querySelector('.running-line__content');

    const texts = document.querySelectorAll('.running-line__text');
    texts.forEach(text => {
      const clone = text.cloneNode(true);
      runningLineContent.appendChild(clone);
    });
  };

  getRunningLineClone();
});
