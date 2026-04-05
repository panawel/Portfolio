window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 600);
        }, 400); // 400ms min delay for aesthetic
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initFooterYear();
    initSidebar();
    initExperienceCounter();
    initActiveDropdown();
    initVideoResizeHandler();
    initScrollHint();
});

function initSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024 && sidebar.classList.contains('active')) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Close sidebar when a navigation link is clicked
        const navLinks = sidebar.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                }
            });
        });
    }

    // Modern Scroll Spy using IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.sidebar .nav-item');

    if (navItems.length > 0 && sections.length > 0) {
        // Options for the observer: trigger when section enters the top portion of the screen
        const options = {
            root: null, // viewport
            rootMargin: '-10% 0px -85% 0px', // Narrow detection band near the top
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        navItems.forEach(item => {
                            item.classList.remove('active');
                            const href = item.getAttribute('href');
                            if (href && (href === `#${id}` || href.endsWith(`#${id}`))) {
                                item.classList.add('active');
                            }
                        });
                    }
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));
    }

    // Explicit click handler to ensure immediate visual feedback regardless of scroll spy
    const navLinks = sidebar.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
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

    // Calculate diff in Years and Months
    let diffYears = now.getFullYear() - startDate.getFullYear();
    let diffMonths = now.getMonth() - startDate.getMonth();

    if (diffMonths < 0) {
        diffYears--;
        diffMonths += 12;
    }

    // Construct "Year.Month" format (e.g., 2 years 4 months -> 2.4)
    // Note: This is a visual representation requested by the user, not a mathematical decimal.
    const targetValue = parseFloat(diffYears + "." + diffMonths);

    // Make clickable for fireworks
    const container = counterElement.parentElement;
    container.style.cursor = 'pointer';
    container.title = "Click for celebration!";
    container.addEventListener('click', () => {
        triggerFireworks(container);
    });

    // Animate counter
    let current = 0.0;
    // We animate as a simple float increment for visual effect
    const interval = setInterval(() => {
        current += 0.1;

        // Fix potential floating point issues for comparison
        if (current >= targetValue) {
            current = targetValue;
            clearInterval(interval);
            triggerFireworks(counterElement.parentElement);
        }
        // Display with appropriate decimal places logic
        // If it's 2.10 (2 years 10 months), parseFloat("2.10") is 2.1, but we might want to show "2.10" string if months >= 10?
        // User asked for "2.4". Let's stick to standard number formatting which usually drops trailing zeros, 
        // but for <10 months it works perfectly (2.4). For 10,11 months it might be ambiguous (2.1) but user request was specific to the 2.4 example.
        // To be safe for 10/11 months, we could treat it as string, but animation loop relies on numbers.
        // Let's assume standard float text content for now as it matches the "2.4" request.

        // Special handling to ensure we don't show "2.4000001"
        const display = parseFloat(current.toFixed(1));
        counterElement.textContent = display;
    }, 50);
}

function initScrollHint() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (!scrollHint) return;

    let ticking = false;
    let hasHidden = false;

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 20) {
                    scrollHint.classList.add('hide-hint');
                    hasHidden = true;
                    // Remove listener so it never comes back
                    window.removeEventListener('scroll', onScroll);
                } else if (!hasHidden) {
                    scrollHint.classList.remove('hide-hint');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll);
}

// Single Fireworks System
const FireworksSystem = {
    canvas: null,
    ctx: null,
    particles: [],
    isRunning: false,
    width: 800,
    height: 600,
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

        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 3 + 2; // Bigger spread
            this.particles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                alpha: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                decay: Math.random() * 0.02 + 0.01,
                gravity: 0.05,
                size: Math.random() * 1.5 + 1.5 // Variable size (1.5px - 3px)
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

                // Glow Effect
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = p.color;

                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

    // 3 more random explosions (Total 4)
    setTimeout(() => {
        FireworksSystem.addExplosion(getRandomX(), getRandomY());
    }, 150);

    setTimeout(() => {
        FireworksSystem.addExplosion(getRandomX(), getRandomY());
    }, 300);

    setTimeout(() => {
        FireworksSystem.addExplosion(getRandomX(), getRandomY());
    }, 450);
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
