import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')



function galleryItemsMarkUp(array) {

    const elements = array.map(item => {
    
        const galleryItemEL = document.createElement('li')
        const gelleryImageEl = document.createElement('img')
        const galleryLinkEl = document.createElement('a')
        


        galleryItemEL.classList.add('gallery__item')

        galleryLinkEl.classList.add('gallery__link')
        galleryLinkEl.href = item.preview

        gelleryImageEl.classList.add('gallery__image')
        gelleryImageEl.src = item.preview
        gelleryImageEl.alt = item.description

        galleryLinkEl.appendChild(gelleryImageEl)
        galleryItemEL.appendChild(galleryLinkEl)

        return galleryItemEL
    });
    galleryListEl.append(...elements)
}

galleryItemsMarkUp(galleryItems)

const gallery = new SimpleLightbox('.gallery')

function onImageClick(event) {
    event.preventDefault()
    if (!event.target.nodeName === 'IMG') {
        return
    }

    gallery.open()
}

galleryListEl.addEventListener('click', onImageClick)

console.log(gallery)


