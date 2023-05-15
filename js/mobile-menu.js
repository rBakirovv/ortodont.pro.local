window.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector("html");
  const mobileMenuButtonService = document.querySelector(".mobile-menu__button-service");
  const swipeMenu = document.querySelector(".swipe-menu");
  const swipeMenuContainer = swipeMenu.querySelector(".swipe-menu__container");
  const menuBackground = document.querySelector(".menu-background");
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerIcon = document.querySelector(".menu__button-burger-ico");

  function handleMobileMenu() {
    mobileMenuButtonService.classList.toggle("mobile-menu__button-service_active");
    swipeMenu.classList.toggle("swipe-menu_active");
    menuBackground.classList.toggle("menu-background_active");

    if (html.style.overflow === "hidden") {
      html.style.overflow = "visible";
      swipeMenu.style.transform = `translateY(150%)`;
    } else {
      html.style.overflow = "hidden";
      swipeMenu.style.transform = `translateY(0)`;
    }
  }

  function mobileMenuClose() {
    html.style.overflow = "visible";
    mobileMenuButtonService.classList.remove("mobile-menu__button-service_active");
    swipeMenu.classList.remove("swipe-menu_active");
    menuBackground.classList.remove("menu-background_active");
    swipeMenu.style.transform = `translateY(150%)`;
    burgerIcon.classList.remove("burger_active");
  }

  let touchstartY = 0;
  let touchendY = 0;
  let movedY = 0;
  let containerPos = 0;

  if (swipeMenu) {
    swipeMenu.addEventListener('touchstart', function (event) {
      touchstartY = event.changedTouches[0].screenY;
    }, false)

    swipeMenu.addEventListener('touchmove', function (event) {
      movedY = event.changedTouches[0].screenY;
      if ((movedY - touchstartY > 0) && (!event.target.closest(".swipe-menu__container"))) {
        swipeMenu.style.transform = `translateY(${movedY - touchstartY}px)`;
      }
    })

    swipeMenuContainer.addEventListener("scroll", () => {
      containerPos = swipeMenuContainer.scrollTop;
    })

    swipeMenu.addEventListener('touchend', function (event) {
      touchendY = event.changedTouches[0].screenY;

      if ((movedY - touchstartY > 30) && (!event.target.closest(".swipe-menu__container"))) {
        mobileMenuClose();
      } else {
        swipeMenu.style.transform = `translateY(0)`;
      }
    }, false)

    mobileMenuButtonService.addEventListener("click", handleMobileMenu);
  }

  window.addEventListener("scroll", () => {
    if (mobileMenu) {
      if (!mobileMenu.classList.contains("mobile-menu_opened")) {
        mobileMenu.classList.add("mobile-menu_opened");
      }
    }
  })

  menuBackground.addEventListener("click", () => {
    // close мобильного меню
    if (document.querySelector(".swipe-menu_active")) {
      mobileMenuButtonService.classList.remove("mobile-menu__button-service_active");
      swipeMenu.classList.remove("swipe-menu_active");
      menuBackground.classList.remove("menu-background_active");
      swipeMenu.style.transform = `translateY(150%)`;
      burgerIcon.classList.remove("burger_active");
    }

    if (html.style.overflow === "hidden") {
      html.style.overflow = "visible";
    } else {
      html.style.overflow = "hidden";
    }
  })
})