import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const image = galleryItems
  .map(
    (i) =>
      `<a class="gallery__link" href="${i.original}">
    <img class="gallery__image" 
    src="${i.preview}" 
    alt="${i.description}"
    title="${i.description}"/>
        </a>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", image);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
