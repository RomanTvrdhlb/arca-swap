export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  header: document.querySelector("header"),
  video: [...document.querySelectorAll("[data-video]")],
  startButton: document.querySelector(".start-button"),
  image: document.querySelector(".our-section__image"),
}




