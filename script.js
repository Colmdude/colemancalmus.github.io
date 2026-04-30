// ════════════════════════════════════════════════
//  ADD YOUR PHOTOS HERE
//  1. Drop the image file into the photos/ folder
//  2. Add the filename to the list below
// ════════════════════════════════════════════════

const photos = [
  'photos/photo1.jpg',
  // 'photos/photo2.jpg',
  // 'photos/photo3.jpg',
];

// ════════════════════════════════════════════════

const photoGrid = document.getElementById('photo-grid');
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lightbox-img');

photos.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'grid-photo';
  img.alt = '';
  img.addEventListener('click', () => openLightbox(src));
  photoGrid.appendChild(img);
});

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbImg.src = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
