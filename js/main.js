// Main JavaScript shared across pages

document.addEventListener('DOMContentLoaded', () => {
    initFooterYear();
    initMobileMenu();
    initExperienceCounter();
    initActiveDropdown();
    initVideoResizeHandler();
});

function initVideoResizeHandler() {
    const video = document.querySelector('.video-placeholder');
    if (!video) return;

    // Sources mapping
    const sources = {
        mobile: 'media/mobile.mp4',
        tablet: 'media/tablet.mp4',
        desktop: 'media/desktop.mp4'
    };

    let currentType = getVideoType();

    function getVideoType() {
        const width = window.innerWidth;
        if (width < 769) return 'mobile';
        if (width < 1025) return 'tablet';
        return 'desktop';
    }

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const handleResize = debounce(() => {
        const newType = getVideoType();
        if (newType !== currentType) {
            // console.log(`Switching video from ${currentType} to ${newType}`);
            currentType = newType;
            const newSrc = sources[newType];

            // Remember playback time? Optional, but nice.
            // const currentTime = video.currentTime; 

            // Update source
            video.src = newSrc;
            video.load();
            video.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, 250); // Wait 250ms after resize stops

    window.addEventListener('resize', handleResize);
}

function initFooterYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Create and append overlay dynamically
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('menu-overlay');
        document.body.appendChild(overlay);
    }

    if (menuBtn && navLinks) {
        // Toggle Menu
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close when clicking overlay
        overlay.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(false);
            }
        });

        // Close when clicking outside (fallback for desktop if needed, or non-overlay clicks)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (navLinks.classList.contains('active') &&
                    !navLinks.contains(e.target) &&
                    !menuBtn.contains(e.target) &&
                    !overlay.contains(e.target)) {
                    toggleMenu(false);
                }
            }
        });

        function toggleMenu(forceState = null) {
            const isActive = navLinks.classList.contains('active');
            const shouldBeActive = forceState !== null ? forceState : !isActive;

            if (shouldBeActive) {
                navLinks.classList.add('active');
                overlay.classList.add('active');
                menuBtn.setAttribute('aria-expanded', 'true');

                // Block Scrolling
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden'; // For some mobile browsers
            } else {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');

                // Enable Scrolling
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }

            // Animate Hamburger
            const spans = menuBtn.querySelectorAll('span');
            if (shouldBeActive) {
                // To X
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Back to burger
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }

    // Handle mobile dropdowns (Accordion)
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(drop => {
        drop.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns (optional, but good for accordion)
                dropdowns.forEach(otherDrop => {
                    if (otherDrop !== drop) {
                        otherDrop.parentElement.classList.remove('active');
                    }
                });

                const parent = drop.parentElement;
                parent.classList.toggle('active');

                // Update aria-expanded
                drop.setAttribute('aria-expanded', parent.classList.contains('active'));
            }
        });
    });
}

function initExperienceCounter() {
    const counterElement = document.getElementById('years-counter');
    if (!counterElement) return;

    // Start Date: September 2023
    const startDate = new Date('2023-09-01');
    const now = new Date();

    // Calculate difference in years with one decimal
    const diffInMilliseconds = now - startDate;
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    // Format to 1 decimal place
    const years = diffInYears.toFixed(1);

    // Make clickable for fireworks
    const container = counterElement.parentElement;
    container.style.cursor = 'pointer';
    container.title = "Click for celebration!";
    container.addEventListener('click', () => {
        triggerFireworks(container);
    });

    // Animate counter
    let current = 0.0;
    const interval = setInterval(() => {
        current += 0.1;
        if (current >= years) {
            current = years;
            clearInterval(interval);
            triggerFireworks(counterElement.parentElement);
        }
        counterElement.textContent = parseFloat(current).toFixed(1);
    }, 50);
}

function triggerFireworks(container) {
    if (!container) return;

    // Check if a canvas already exists to prevent accumulation
    if (container.querySelector('canvas')) return;

    // Create Canvas attached to the container
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    // const rect = container.getBoundingClientRect(); // No longer needed for positioning

    // Set a fixed smaller size for the explosion area relative to the text
    const size = 300;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '20'; // Above the text
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Scale for high DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Center of the canvas
    const originX = size / 2;
    const originY = size / 2;

    // Particle System
    const particles = [];
    const colors = ['#3b82f6', '#8b5cf6', '#e0e0e0', '#ffffff', '#FFD700'];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            const angle = Math.random() * Math.PI * 2;
            // Reduced velocity for smaller explosion radius
            const velocity = Math.random() * 2 + 1;
            this.vx = Math.cos(angle) * velocity;
            this.vy = Math.sin(angle) * velocity;
            this.alpha = 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.decay = Math.random() * 0.02 + 0.01;
            this.gravity = 0.05;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.alpha -= this.decay;
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); // Smaller particles
            ctx.fill();
            ctx.restore();
        }
    }

    // Spawn Fireworks
    function spawnFirework(x, y) {
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle(x, y));
        }
    }

    // Initial Burst
    spawnFirework(originX, originY);

    // Animation Loop
    let frame = 0;
    const maxFrames = 150;

    function animate() {
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        // Randomly spawn more fireworks near the center
        if (frame % 20 === 0 && frame < 80) {
            const offsetX = (Math.random() - 0.5) * 60; // Tighter spread
            const offsetY = (Math.random() - 0.5) * 60;
            spawnFirework(originX + offsetX, originY + offsetY);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);
            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        frame++;
        if (frame < maxFrames || particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            if (container.contains(canvas)) {
                container.removeChild(canvas);
            }
        }
    }

    animate();
}

function initActiveDropdown() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    if (!currentFile) return; // e.g. root without index.html, though usually safe

    dropdownLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Handle relative paths (e.g. "projects/paybox.html" or "paybox.html")
        // We check if the link ends with the current filename
        if (linkHref && linkHref.endsWith(currentFile)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
