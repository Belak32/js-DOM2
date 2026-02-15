import { fetchImages } from './api.js';
import { 
  renderImages, 
  clearGallery, 
  removeLastImage, 
  reverseGallery 
} from './gallery.js';

const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');
const clearBtn = document.getElementById('clearGallery');
const removeLastBtn = document.getElementById('removeLast');
const reverseBtn = document.getElementById('reverseGallery');

let page = 1;

async function loadImages() {
  const data = await fetchImages(page);
  renderImages(data, gallery);
  page++;
}

loadMoreBtn.addEventListener('click', loadImages);
clearBtn.addEventListener('click', () => clearGallery(gallery));
removeLastBtn.addEventListener('click', () => removeLastImage(gallery));
reverseBtn.addEventListener('click', () => reverseGallery(gallery));

loadImages();
