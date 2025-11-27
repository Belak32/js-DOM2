const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');
const clearBtn = document.getElementById('clearGallery');
const removeLastBtn = document.getElementById('removeLast');
const reverseBtn = document.getElementById('reverseGallery');

let page = 1;

// Функція завантаження картинок
async function loadImages() {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`);
  const data = await response.json();

  data.forEach(img => {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/id/${img.id}/400/300`;
    gallery.appendChild(image);
  });

  page++; // наступна сторінка
}

// Очистити галерею
function clearGallery() {
  gallery.innerHTML = '';
}

// Видалити останню картинку
function removeLastImage() {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
}

// Перевернути порядок
function reverseGalleryFn() {
  const items = Array.from(gallery.children);
  gallery.innerHTML = '';
  items.reverse().forEach(el => gallery.appendChild(el));
}

// Обробники подій
loadMoreBtn.addEventListener('click', loadImages);
clearBtn.addEventListener('click', clearGallery);
removeLastBtn.addEventListener('click', removeLastImage);
reverseBtn.addEventListener('click', reverseGalleryFn);

// Завантаження перших 4 картинок при старті
loadImages();
