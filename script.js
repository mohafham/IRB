// Irram Fatima — Chapter 21
// Replace the sample memories, captions and milestone copy below with real details.
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
let musicOn = false;

function stopBackgroundMusic() {
  music.pause();
  musicOn = false;
  musicLabel.textContent = 'Play music';
  musicToggle.setAttribute('aria-label', 'Play background music');
}

document.querySelectorAll('video').forEach(video => {
  video.muted = false;
  video.defaultMuted = false;
  video.volume = 1;
  video.addEventListener('play', () => {
    stopBackgroundMusic();
    video.muted = false;
    video.volume = 1;
  });
});

musicToggle.addEventListener('click', async () => {
  if (!musicOn) {
    try { await music.play(); musicOn = true; musicLabel.textContent = 'Pause music'; musicToggle.setAttribute('aria-label','Pause background music'); }
    catch { showToast('The background music could not be played.'); }
  } else {
    stopBackgroundMusic();
  }
});

const track = document.getElementById('childhoodTrack');
const progress = document.getElementById('carouselProgress');
function updateProgress(){
  const max = track.scrollWidth - track.clientWidth;
  progress.style.width = (max <= 0 ? 100 : 20 + (track.scrollLeft / max) * 80) + '%';
}
document.querySelectorAll('[data-carousel="childhood"]').forEach(btn => {
  btn.addEventListener('click', () => track.scrollBy({left: btn.classList.contains('next') ? 285 : -285, behavior:'smooth'}));
});
track.addEventListener('scroll', updateProgress); window.addEventListener('resize', updateProgress); updateProgress();

// Open local images in a lightbox. Replace the matching image placeholders with your own photos.
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.lightbox;
    lightboxImg.src = src;
    lightboxImg.onerror = () => showToast('Add the matching photo file inside assets/photos/.');
    lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
  });
  if (card.getAttribute('role') === 'button') {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  }
});
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

// Little notes reveal.
const revealed = document.getElementById('revealedMessage');
document.querySelectorAll('.envelope').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.envelope').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    revealed.innerHTML = '<span>♡</span><p></p>';
    revealed.querySelector('p').textContent = card.dataset.message;
  });
});

// Celebration confetti — no external library required.
document.getElementById('celebrateBtn').addEventListener('click', () => {
  const symbols = ['✳','✦','♡','✿'];
  for(let i=0;i<65;i++){
    const bit = document.createElement('span');
    bit.className='confetti-piece'; bit.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    bit.style.left=Math.random()*100+'vw'; bit.style.animationDelay=(Math.random()*.9)+'s';
    bit.style.fontSize=(10+Math.random()*12)+'px'; bit.style.color=['#a77c5d','#d0a77e','#b7a08a','#e1c9aa'][i%4];
    document.body.appendChild(bit); setTimeout(()=>bit.remove(),4200);
  }
  showToast('A little extra birthday magic for Irram! ✨');
});

let toastTimer;
function showToast(message){
  const toast=document.getElementById('toast'); toast.textContent=message; toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2800);
}

// Touch-friendly horizontal carousel dragging.
let isDown=false,startX=0,scrollStart=0;
track.addEventListener('pointerdown',e=>{isDown=true;startX=e.clientX;scrollStart=track.scrollLeft;track.setPointerCapture(e.pointerId)});
track.addEventListener('pointermove',e=>{if(isDown)track.scrollLeft=scrollStart-(e.clientX-startX)});
['pointerup','pointercancel','lostpointercapture'].forEach(evt=>track.addEventListener(evt,()=>isDown=false));
