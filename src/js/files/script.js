// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// const picker = datepicker("#datepicker", {
//   alwaysShow: true,
//   customDays: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//   customMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
// });

window.onload = function () {
  // Lines animation
  if (document.getElementById("lines")) {
    let svgMorpheus = new SVGMorpheus("#lines");
    let timeoutInstance;

    const idArray = ["line-1", "line-2", "line-3"];
    let index = 0;

    function onIconChange() {
      if (index == idArray.length - 1) {
        index = 0;
      } else {
        index++;
      }
      clearTimeout(timeoutInstance);
      svgMorpheus.to(
        idArray[index],
        { duration: 10000, easing: "linear", rotation: "none" },
        launchTimer
      );
    }

    function launchTimer() {
      timeoutInstance = setTimeout(onIconChange, 1000);
    }

    launchTimer();
  }

  // Active header link
  const links = document.querySelectorAll(".menu__link");
  const page = window.location.pathname.substring(1);
  if (links.length > 0) {
    links.forEach((link) => {
      link.getAttribute("href") === page
        ? link.classList.add("active")
        : link.classList.remove("active");
    });
  }
};
