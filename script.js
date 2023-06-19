document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carouselItem");
  const buttonsHTML = Array.from(items, () => {
    return `<span class="button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
      <div class="carouselNav">
      ${buttonsHTML.join("")}
      
      </div>
      `
  );
  /* console.log(buttonsHTML); */

  const buttons = carousel.querySelectorAll(".button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      //un-select all the items
      items.forEach((item) => item.classList.remove("buttonSelected"));
      buttons.forEach((button) => button.classList.remove("buttonSelected"));

      items[i].classList.add("buttonSelected");
      button.classList.add("buttonSelected");
    });
  });
});
