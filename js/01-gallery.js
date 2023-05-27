import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery')

function galleryItemsMarkUp(array) {

    const elements = array.map(item => {
    
        const galleryItemEL = document.createElement('li')
        const gelleryImageEl = document.createElement('img')
        const galleryLinkEl = document.createElement('a')
        


        galleryItemEL.classList.add('gallery__item')

        galleryLinkEl.classList.add('gallery__link')
        galleryLinkEl.href = item.original

        gelleryImageEl.classList.add('gallery__image')
        gelleryImageEl.dataset.source = item.original
        gelleryImageEl.src = item.preview
        gelleryImageEl.alt = item.description

        galleryLinkEl.appendChild(gelleryImageEl)
        galleryItemEL.appendChild(galleryLinkEl)

        return galleryItemEL
    });
    galleryListEl.append(...elements)
}

galleryItemsMarkUp(galleryItems)



function onImageClick(event) {
    event.preventDefault()
    if (!event.target.nodeName === 'IMG') {
        return
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {closable: true})
    instance.show()
    
    
    document.addEventListener('keydown', onEscModalClose)
    
    function onEscModalClose(event) {
    if (!event.code === "Escape") {
        return
    }
    
    instance.close()
    document.removeEventListener('keydown', onEscModalClose)
}
}

galleryListEl.addEventListener('click', onImageClick)

