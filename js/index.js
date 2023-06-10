document.addEventListener("DOMContentLoaded", () => {
  // Получаем коллекцию всех выпадающих списков
  const accordions = document.querySelectorAll(".accordion");

  // Добавляем обработчик "клика" на каждый список
  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".accordion__content");

      // свертываем все выпадающие списки, кроме текущего
      hideLists(accordions, self);

      // меняем состояние текущего списка на противоположное
      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
});

// Функция свертывания всех выпадающих списков, кроме текущего
function hideLists(accordions, self) {
  accordions.forEach((accordion) => {
    const control = accordion.querySelector(".accordion__control");
    const content = accordion.querySelector(".accordion__content");
    if (accordion !== self) {
      setTimeout(() => {
        accordion.classList.remove("open");
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }, 500);
    }
  });
}
