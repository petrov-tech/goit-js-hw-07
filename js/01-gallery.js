import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
// console.log("🚀 -> gallery", gallery);
const image = galleryItems
  .map(
    (i) =>
      `<div class="gallery__item">
      <a class="gallery__link"href="${i.original}">
      <img
        class="gallery__image"
        src="${i.preview}"
        alt="${i.description}"
        ></a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", image);

gallery.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    // console.log(e.target);
    // console.log(e.currentTarget);

});


// const instance = basicLightbox.create(`
//     <img src="${}" width="800" height="600">
// `);

// instance.show();