import { throttle } from './throttle';

export const removeCustomClass = (item, customClass) => {
  item.classList.remove(customClass);
};
// ----------------------------------------------------
export const removeDoubleClass = (item, firstClass, secondClass) => {
  item.classList.remove(firstClass, secondClass);
};
// ----------------------------------------------------
export const addCustomClass = (item, customClass) => {
  item.classList.add(customClass);
};
//-----------------------------------------------------
export const toggleCustomClass = (item, customClass) => {
  item.classList.toggle(customClass);
};
// ----------------------------------------------------
export const removeClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.remove(customClass);
  });
};
// ----------------------------------------------------
export const addCustomClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.add(customClass);
  });
};
// ----------------------------------------------------
export const toggleClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.toggle(customClass);
  });
};
//-----------------------------------------------------
export const elementHeight = (el, variableName) => {
  // el -- сам елемент (но не коллекция)
  // variableName -- строка, имя создаваемой переменной
  if (el) {
    function initListener() {
      const elementHeight = el.offsetHeight;
      document
        .querySelector(":root")
        .style.setProperty(`--${variableName}`, `${elementHeight}px`);
    }

    window.addEventListener("DOMContentLoaded", initListener);
    window.addEventListener("resize", throttle(initListener));
  }
};

export const threeClicksHandler = function (array,firstClass = "active",secondClass = "active--mode") {
  let count = 1;
  array.forEach(function (item) {
    item.addEventListener("click", function () {
      switch (count) {
        case 1:
          if (
            this.classList.contains(firstClass) && this.classList.contains(secondClass)) {
            removeDoubleClass(this, firstClass, secondClass);
            count = 1;
          } else if (this.classList.contains(firstClass)) {
            addCustomClass(this, secondClass);
            count += 1;
          } else {
            addCustomClass(this, firstClass);
            count += 1;
          }
          break;
        case 2:
          if (
            this.classList.contains(firstClass) && this.classList.contains(secondClass)) {
            removeDoubleClass(this, firstClass, secondClass);
            count += 1;
          } else if (this.classList.contains(firstClass)) {
            addCustomClass(this, secondClass);
            count = 1;
          } else {
            addCustomClass(this, firstClass);
            count = 2;
          }
          break;
        case 3:
          if (
            this.classList.contains(firstClass) && this.classList.contains(secondClass)) {
            removeDoubleClass(this, firstClass, secondClass);
            count = 1;
          } else if (this.classList.contains(firstClass)) {
            addCustomClass(this, secondClass);
            count = 3;
          } else {
            addCustomClass(this, firstClass);
            count = 2;
          }
          break;
      }
    });
  });
};
