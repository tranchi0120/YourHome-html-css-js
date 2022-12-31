let valueDisplays = document.querySelectorAll('.item-number');
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 100;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// ---------------- Shows Content - Questions ------------------------

const Icons = document.querySelectorAll('.questions-box-icon')
const Icon = [...Icons]
Icon.forEach((item) => item.addEventListener('click', handleClick))

function handleClick(e) {
  const content = e.target.nextElementSibling
  content.style.height = `${ content.scrollHeight }px`
  console.log(e.target.nextElementSibling)
  

  content.classList.toggle('active-content');
  e.target.classList.toggle('fa-plus')
  e.target.classList.toggle('fa-minus')

}

// -------------- Star -------------------------

function initRating(wrapperSelector, starsSelector) {
  const wrapper = document.querySelectorAll(wrapperSelector);
  wrapper.forEach(function (currentWrapper) {
    const stars = currentWrapper.querySelectorAll(starsSelector);

    stars.forEach(function (star) {
      star.addEventListener('click', function (e) {
        const rating = this.dataset['rating'];
        let nextSibling = this.nextElementSibling;
        let previousSibling = this.previousElementSibling;
        this.classList.add('personal-active', 'fa-star');
        this.classList.remove('fa-star-o');
        while (
          nextSibling !== null &&
          (nextSibling.classList.contains('fa-star') ||
            nextSibling.classList.contains('fa-star-o'))
        ) {
          nextSibling.classList.remove('personal-active', 'fa-star');
          nextSibling.classList.add('fa-star-o');
          nextSibling = nextSibling.nextElementSibling;
        }
        while (
          previousSibling !== null &&
          (previousSibling.classList.contains('fa-star') ||
            previousSibling.classList.contains('fa-star-o'))
        ) {
          previousSibling.classList.add('personal-active', 'fa-star');
          previousSibling.classList.remove('fa-star-o');
          previousSibling = previousSibling.previousElementSibling;
        }
      });
    });
  });
}
initRating('.personal-box-star', '.personal-icon');


// ------------- Show Menu --------------------
const showMenu = document.querySelector('.menu-open')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.menu-close')

showMenu.onclick = function () {
  menu.classList.add('show')
  

  closeMenu.style.display = 'flex'
}

closeMenu.onclick = function () {
  menu.classList.remove('show')
   closeMenu.style.display = 'none'
}