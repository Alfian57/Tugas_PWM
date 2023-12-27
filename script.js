const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavigationToogle = document.querySelector(
  ".mobile-navigation-toogle"
);
const mobileNavigationClose = document.querySelector(
  ".mobile-navigation-close"
);

const toggleMenu = () => {
  if (mobileMenu.classList.contains("show-menu")) {
    mobileMenu.classList.remove("show-menu");
    mobileNavigationClose.style.display = "none";
    mobileNavigationToogle.style.display = "block";
  } else {
    mobileMenu.classList.add("show-menu");
    mobileNavigationClose.style.display = "block";
    mobileNavigationToogle.style.display = "none";
  }
};

const hideNavigation = () => {
  mobileMenu.classList.remove("show-menu");
  mobileNavigationClose.style.display = "none";
  mobileNavigationToogle.style.display = "block";
};

mobileNavigationToogle.addEventListener("click", toggleMenu);
mobileNavigationClose.addEventListener("click", toggleMenu);
