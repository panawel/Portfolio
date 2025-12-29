// Main JavaScript shared across pages

document.addEventListener('DOMContentLoaded', () => {
    initFooterYear();
    initMobileMenu();
    initExperienceCounter();
    initActiveDropdown();
    initVideoResizeHandler();
    initScrollHint();
});

function initScrollHint() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (!scrollHint) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollHint.classList.add('hide-hint');
        } else {
            scrollHint.classList.remove('hide-hint');
        }
    });
}

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

function initScrollHint() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (!scrollHint) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    scrollHint.classList.add('hide-hint');
                } else {
                    scrollHint.classList.remove('hide-hint');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Single Fireworks System
const FireworksSystem = {
    canvas: null,
    ctx: null,
    particles: [],
    isRunning: false,
    width: 300,
    height: 300,
    dpr: 1,

    init(container) {
        if (this.canvas) return; // Already initialized

        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '50%';
        this.canvas.style.left = '50%';
        this.canvas.style.transform = 'translate(-50%, -50%)';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '20';

        // Size
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;

        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.dpr = window.devicePixelRatio || 1;

        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
    },

    addExplosion(offsetX = 0, offsetY = 0) {
        if (!this.ctx) return;

        const originX = (this.width / 2) + offsetX;
        const originY = (this.height / 2) + offsetY;
        const colors = ['#3b82f6', '#8b5cf6', '#e0e0e0', '#ffffff', '#FFD700'];

        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 2 + 1;
            this.particles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                alpha: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                decay: Math.random() * 0.02 + 0.01,
                gravity: 0.05
            });
        }

        if (!this.isRunning) {
            this.isRunning = true;
            this.animate();
        }
    },

    animate() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            } else {
                this.ctx.save();
                this.ctx.globalAlpha = p.alpha;
                this.ctx.fillStyle = p.color;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
            }
        }

        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.isRunning = false;
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }
};

function triggerFireworks(container) {
    if (!container) return;

    // Initialize system if needed
    FireworksSystem.init(container);

    // Calculate safe bounds for randomness based on container size
    // We use 80% of width/height to keep fireworks mostly on the text
    const w = container.offsetWidth * 0.8;
    const h = container.offsetHeight * 0.8;

    const getRandomX = () => (Math.random() - 0.5) * w;
    const getRandomY = () => (Math.random() - 0.5) * h;

    // Main explosion (now random position)
    FireworksSystem.addExplosion(getRandomX(), getRandomY());

    // Two more random explosions
    setTimeout(() => {
        FireworksSystem.addExplosion(getRandomX(), getRandomY());
    }, 150);

    setTimeout(() => {
        FireworksSystem.addExplosion(getRandomX(), getRandomY());
    }, 300);
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
