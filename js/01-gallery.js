import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const image = galleryItems
  .map(
    (i) =>
      `<div class="gallery__item">
      <a class="gallery__link"href="${i.original}">
      <img
        class="gallery__image"
        src="${i.preview}"
        alt="${i.description}"
        data-source='${i.original}'
        ></a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", image);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  
  const value = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${value}" width="800" height="600">
`);
  instance.show();
  
  gallery.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.key === "Escape") {
      gallery.removeEventListener("keydown", onEscKeyPress);
      instance.close();
    }
  }
});