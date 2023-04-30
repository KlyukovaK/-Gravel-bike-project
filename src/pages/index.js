const menu = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__close");
const checkTheme = document.querySelector(".footer__checkbox-input");
const darkTheme = document.querySelector("#dark");
const sun = document.querySelector(".imag-theme__sun");
const moon = document.querySelector(".imag-theme__moon");
const logo = document.querySelector(".footer__logo");
const checkThemePopup = document.querySelector(".popup__checkbox-input");

// open popup
menu.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});
//close popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

function chengeTheme() {
  if (checkTheme.checked || checkThemePopup) {
    darkTheme.href = "./css/index-dark.css";
    sun.src = "./images/sun_dark.svg";
    moon.src = "./images/moon_dark.svg";
    logo.src = "./images/logo_dark.svg";
    checkThemePopup.checked = true;
    checkTheme.checked = true;
  } else {
    darkTheme.href = "";
    sun.src = "./images/sun.svg";
    moon.src = "./images/moon.svg";
    logo.src = "./images/logo.svg";
    checkThemePopup.checked = false;
    checkTheme.checked = false;
  }
}
checkTheme.addEventListener("click", () => {
  chengeTheme();
});
checkThemePopup.addEventListener("click", () => {
  chengeTheme();
});

//slider
const ways = [
  {
    name: "Шоссе",
    subtitle:
      "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    way: "./images/way-highway.svg",
    name_bicycle_1: "Cervelo Caledonia 5",
    name_bicycle_2: "Cannondale Systemsix Himod",
    name_bicycle_3: "Trek Domane SL-7",
    imag_bicycle_1: "./images/Cervelo-Caledonia-5.png",
    imag_bicycle_2: "./images/Cannondale-Systemsix-Himod.png",
    imag_bicycle_3: "./images/Trek-Domane-SL-7.png",
    bicycle_href_1:
      "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
    bicycle_href_2:
      "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
    bicycle_href_3:
      "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
  },
  {
    name: "Грэвел",
    subtitle:
      "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    way: "./images/way-gravel.svg",
    name_bicycle_1: "Cervelo Aspero GRX 810",
    name_bicycle_2: "Specialized S-Works Diverge",
    name_bicycle_3: "Cannondale Topstone Lefty 3",
    imag_bicycle_1: "./images/Cervelo-Aspero-GRX-810.png",
    imag_bicycle_2: "./images/Specialized-S-Works-Diverge.png",
    imag_bicycle_3: "./images/Cannondale-Topstone-Lefty-3.png",
    bicycle_href_1:
      "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
    bicycle_href_2:
      "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",
    bicycle_href_3:
      "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
  },
  {
    name: "ТТ",
    subtitle:
      "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    way: "./images/way-tt.svg",
    name_bicycle_1: "Specialized S-Works Shiv",
    name_bicycle_2: "BMC Timemachine 01 ONE",
    name_bicycle_3: "Cervelo P-Series",
    imag_bicycle_1: "./images/Specialized-S-Works-Shiv.png",
    imag_bicycle_2: "./images/BMC-Timemachine-01-ONE.png",
    imag_bicycle_3: "./images/Trek-Domane-SL-7.png",
    bicycle_href_1:
      "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 ",
    bicycle_href_2:
      "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",
    bicycle_href_3:
      "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q",
  },
];
const sliderName = document.querySelector(".slider__title");
const sliderSubtitle = document.querySelector(".slider__subtitle");
const sliderImageWay = document.querySelector(".slider__image-way");
const sliderLine = document.querySelector(".slider__line");
const images = document.querySelectorAll(".slider__image");
const links = document.querySelectorAll(".bicycles__way");
const bicycleCardOne = document.querySelector("#bicycl1");
const bicycleCardTwo = document.querySelector("#bicycl2");
const bicycleCardThree = document.querySelector("#bicycl3");
let i = 0;
let offset = 0;
let width = document.querySelector(".slider__image").offsetWidth;

function changeWays(i, offset) {
  sliderLine.style.right = i * width + offset + "px";
  sliderName.textContent = ways[i].name;
  sliderSubtitle.textContent = ways[i].subtitle;
  sliderImageWay.src = ways[i].way;
  if (i === 0) {
    links[i].classList.add("bicycles__way_active");
    links[i].classList.add("bicycles__way_theme_dark-active");
    links[i + 2].classList.remove("bicycles__way_active");
    links[i + 2].classList.remove("bicycles__way_theme_dark-active");
    links[i + 1].classList.remove("bicycles__way_active");
    links[i + 1].classList.remove("bicycles__way_theme_dark-active");
  }
  if (i === 1) {
    links[i].classList.add("bicycles__way_active");
    links[i].classList.add("bicycles__way_theme_dark-active");
    links[i + 1].classList.remove("bicycles__way_active");
    links[i + 1].classList.remove("bicycles__way_theme_dark-active");
    links[i - 1].classList.remove("bicycles__way_active");
    links[i - 1].classList.remove("bicycles__way_theme_dark-active");
  } if (i === 2) {
    links[i].classList.add("bicycles__way_active");
    links[i].classList.add("bicycles__way_theme_dark-active");
    links[i - 2].classList.remove("bicycles__way_active");
    links[i - 2].classList.remove("bicycles__way_theme_dark-active");
    links[i - 1].classList.remove("bicycles__way_active");
    links[i - 1].classList.remove("bicycles__way_theme_dark-active");
  }
  bicycleCardOne.href= ways[i].bicycle_href_1
  bicycleCardTwo.href= ways[i].bicycle_href_2
  bicycleCardThree.href= ways[i].bicycle_href_3
  bicycleCardOne.querySelector('.bicycles__image').src= ways[i].imag_bicycle_1
  bicycleCardTwo.querySelector('.bicycles__image').src= ways[i].imag_bicycle_2
  bicycleCardThree.querySelector('.bicycles__image').src= ways[i].imag_bicycle_3
  bicycleCardOne.querySelector('.bicycles__image').alt= ways[i].name_bicycle_1
  bicycleCardTwo.querySelector('.bicycles__image').alt= ways[i].name_bicycle_2
  bicycleCardThree.querySelector('.bicycles__image').alt= ways[i].name_bicycle_3
  bicycleCardOne.querySelector('.bicycles__name').textContent= ways[i].name_bicycle_1
  bicycleCardTwo.querySelector('.bicycles__name').textContent= ways[i].name_bicycle_2
  bicycleCardThree.querySelector('.bicycles__name').textContent= ways[i].name_bicycle_3
}

document
  .querySelector(".slider__button_type_forward")
  .addEventListener("click", () => {
    i++;
    offset += 40;
    if (i >= images.length) {
      i = 0;
      offset = 0;
    }
    changeWays(i, offset);
  });
document
  .querySelector(".slider__button_type_back")
  .addEventListener("click", () => {
    i--;
    offset -= 40;
    if (i < 0) {
      i = 2;
      offset = 80;
    }
    changeWays(i, offset);
  });
