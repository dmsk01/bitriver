// Подключение из node_modules
import tippy, { hideAll } from "tippy.js";

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

const emptyRegions = document.querySelectorAll("path:not([data-template])");
emptyRegions.forEach((region) => {
  if (!region.dataset.hascod) {
    region.setAttribute("data-tippy-empty", true);
  }
});

//  data-hascod="true"

export function initTippy() {
  tippy("[data-tippy-content]", {
    content(reference) {
      const text = reference.getAttribute("data-template");
      return `
					<div class="tip">
						<div class="tip__box">
							<h4 class="tip__title">${text}</h4>
							<a href='#' class="tip__link button button_filled">РАЗМЕСТИТЬ</a>
						</div>
					</div>
			`;
    },
    allowHTML: true,
    placement: "right-end",
    // trigger: "click",
    // onShow(instance) {
    //   hideAll({ duration: 0 });

    //   instance.setProps({ trigger: "click" });
    // },
    // onHide(instance) {
    //   instance.setProps({ trigger: "mouseenter" });
    // },
    interactive: true,
    appendTo: document.body,
  });

  tippy("[data-tippy-empty]", {
    content() {
      return `
					<div class="tip">
						<div class="tip__box">
							<h4 class="tip__text">В данном регионе ЦОДы отсутствуют, но можно заказать оборудование с доставкой и настройкой</h4>
						</div>
					</div>
			`;
    },
    allowHTML: true,
    placement: "right-end",
  });
}
initTippy();

// add attribute to geo-pin svg path => class="geo-pointer" data-tippy-content data-template="ЦОД г. Усть-Илимск"
// add attribute to regions with cod => data-hascod="true"
