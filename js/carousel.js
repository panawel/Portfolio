// Modern Gallery & Lightbox Logic

document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
});

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxVideoContainer = lightbox.querySelector('.lightbox-video-container');
    const lightboxVideo = lightbox.querySelector('.lightbox-video');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-btn.prev');
    const nextBtn = lightbox.querySelector('.lightbox-btn.next');

    let galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 0;

    // Zoom state
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Open Lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            // If viewing video in grid, maybe prevent lightbox or auto-play in lightbox?
            // For this logic, we'll open everything in lightbox.
            e.preventDefault();
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        updateLightboxContent();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        pauseVideo();
        resetZoom();
    }

    function updateLightboxContent() {
        const item = galleryItems[currentIndex];

        // Reset Zoom on slide change
        resetZoom();

        // Check if video
        const video = item.querySelector('video');
        const img = item.querySelector('img');

        if (video) {
            lightboxImg.style.display = 'none';
            lightboxVideoContainer.style.display = 'block';
            const source = video.querySelector('source').src;
            if (lightboxVideo.querySelector('source').src !== source) {
                lightboxVideo.querySelector('source').src = source;
                lightboxVideo.load();
            }
            // Autoplay the video
            lightboxVideo.play().catch(e => console.log('Autoplay blocked:', e));
        } else if (img) {
            lightboxVideoContainer.style.display = 'none';
            lightboxImg.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        }
    }

    function pauseVideo() {
        lightboxVideo.pause();
    }

    // Navigation
    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxContent();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeLightbox);

    // Close on clicking background (but not content)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

    // --- Zoom & Pan Logic (Simple Implementation) ---
    lightboxImg.addEventListener('wheel', (e) => {
        if (!lightbox.classList.contains('active')) return;
        e.preventDefault();

        const delta = e.deltaY * -0.01;
        const newScale = Math.min(Math.max(1, scale + delta), 4); // Min 1x, Max 4x

        scale = newScale;
        applyTransform();
    });

    // Reset zoom helper
    function resetZoom() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        lightboxImg.style.transform = `scale(1) translate(0, 0)`;
        lightboxImg.style.cursor = 'grab';
    }

    function applyTransform() {
        lightboxImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
        if (scale > 1) {
            lightboxImg.style.cursor = 'grab'; // Or move
        } else {
            lightboxImg.style.cursor = 'default';
        }
    }

    // Basic Dragging when zoomed (Optional, for simplified touch-like movement on desktop)
    // For a robust implementation, a library like PhotoSwipe is better, but here is a simple custom version.

    lightboxImg.addEventListener('mousedown', (e) => {
        if (scale <= 1) return;
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        lightboxImg.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        applyTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        if (scale > 1) lightboxImg.style.cursor = 'grab';
    });
}
