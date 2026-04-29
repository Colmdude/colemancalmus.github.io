// ════════════════════════════════════════════════
//  ADD YOUR MEDIA HERE
//  Photos: drop files into the photos/ folder,
//          then add the filename to the list below.
//  Videos: for .mp4 files in the videos/ folder,
//          use { type: 'mp4', src: 'videos/file.mp4' }
//          For Vimeo embeds (recommended for large videos),
//          use { type: 'vimeo', id: '123456789' }
//          For YouTube embeds,
//          use { type: 'youtube', id: 'dQw4w9WgXcQ' }
// ════════════════════════════════════════════════

const photos = [
  'photos/photo1.jpg',
  // 'photos/photo2.jpg',
  // 'photos/photo3.jpg',
];

const videos = [
  { type: 'mp4', src: 'videos/video.mp4' },
  // { type: 'vimeo',   id: '123456789' },
  // { type: 'youtube', id: 'dQw4w9WgXcQ' },
];

// ════════════════════════════════════════════════
//  No need to edit below this line
// ════════════════════════════════════════════════

const photoGrid = document.getElementById('photo-grid');
const videoGrid = document.getElementById('video-grid');
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

videos.forEach(v => {
  if (v.type === 'mp4') {
    const vid = document.createElement('video');
    vid.src = v.src;
    vid.className = 'grid-video';
    vid.controls = true;
    vid.playsInline = true;
    videoGrid.appendChild(vid);
  } else {
    const wrap = document.createElement('div');
    wrap.className = 'grid-video-embed';
    const base = v.type === 'vimeo'
      ? `https://player.vimeo.com/video/${v.id}?dnt=1`
      : `https://www.youtube-nocookie.com/embed/${v.id}`;
    wrap.innerHTML = `<iframe src="${base}" allowfullscreen loading="lazy"></iframe>`;
    videoGrid.appendChild(wrap);
  }
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
