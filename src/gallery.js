export function renderImages(data, gallery) {
  data.forEach(img => {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/id/${img.id}/400/300`;
    gallery.appendChild(image);
  });
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function removeLastImage(gallery) {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
}

export function reverseGallery(gallery) {
  const items = Array.from(gallery.children);
  gallery.innerHTML = '';
  items.reverse().forEach(el => gallery.appendChild(el));
}
