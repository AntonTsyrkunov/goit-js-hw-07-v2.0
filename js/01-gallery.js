import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoGallery = document.querySelector(".gallery");

const photoMarkup = createGallery(galleryItems);

photoGallery.insertAdjacentHTML('beforeend', photoMarkup);

photoGallery.addEventListener('click', getScalePicture);

function createGallery(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          /> 
        </a>
        </div>
      `;
      })
      .join('');
  }

function getScalePicture (evt) {
    evt.preventDefault();;

    if (evt.target.nodeName !== 'IMG') {
        return;
      }


    const aimedPic = evt.target.dataset.source;

    console.log(aimedPic);

    const instance = basicLightbox.create(`<img src="${aimedPic}" width="1280" height="auto"/>`,);
    
    instance.show();

}


          
    
