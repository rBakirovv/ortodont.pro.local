window.addEventListener("DOMContentLoaded", function () {
  const burgerIcons = document.querySelectorAll('.menu__button-burger-ico');

  burgerIcons.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('burger_active');
    });
  })
})