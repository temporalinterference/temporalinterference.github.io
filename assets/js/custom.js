document.addEventListener('DOMContentLoaded', () => {
    /**
     * Configuration options for ScrollController
     * @typedef {Object} ScrollControllerOptions
     * @property {string} [selector='.ti-card-holder'] - Query selector for slider elements
     * @property {number} [scrollSpeed=0.5] - Multiplier for horizontal scroll speed
     * @property {number} [extremeThreshold=20] - Pixel threshold for detecting document extremes
     */
    class ScrollController {
        /**
         * Creates a new ScrollController instance
         * @param {ScrollControllerOptions} [options={}] - Configuration options
         */
        constructor(options = {}) {
            // Initialize configuration with defaults
            const config = {
                selector: '.ti-card-holder',
                scrollSpeed: 0.5,
                extremeThreshold: 20,
                ...options
            };

            // Initialize core properties
            this.sliders = Array.from(document.querySelectorAll(config.selector));
            this.scrollSpeed = config.scrollSpeed;
            this.extremeThreshold = config.extremeThreshold;
            this.lastScrollY = window.scrollY;
            this.viewportHeight = window.innerHeight;
            this.documentHeight = document.documentElement.scrollHeight;
            this.virtualPointY = this.viewportHeight / 2;
            
            this.initSliders();
            this.init();
        }

        /**
         * Initialize sliders with drag behavior
         */
        initSliders() {
            this.sliders.forEach(slider => {
                // Disable smooth scrolling for better drag performance
                slider.style.scrollBehavior = 'auto';
                slider.style.cursor = 'grab';
                
                let isPointerDown = false;
                let activePointerId = null;
                let grabX = 0;
                let initialScroll = 0;

                slider.addEventListener('pointerdown', (e) => {
                    isPointerDown = true;
                    activePointerId = e.pointerId;
                    grabX = e.clientX;
                    initialScroll = slider.scrollLeft;
                    
                    if (e.pointerType === 'mouse') {
                        slider.style.cursor = 'grabbing';
                    }
                    
                    e.preventDefault();
                });

                slider.addEventListener('pointermove', (e) => {
                    if (!isPointerDown || e.pointerId !== activePointerId) return;
                    
                    const moveX = e.clientX - grabX;
                    
                    requestAnimationFrame(() => {
                        slider.scrollLeft = initialScroll - moveX;
                    });
                    
                    e.preventDefault();
                    e.stopPropagation();
                });

                const endPointerDrag = (e) => {
                    if (e.pointerId === activePointerId) {
                        if (e.pointerType === 'mouse') {
                            slider.style.cursor = 'grab';
                        }
                        isPointerDown = false;
                        activePointerId = null;
                    }
                };

                slider.addEventListener('pointerup', endPointerDrag);
                slider.addEventListener('pointercancel', endPointerDrag);
            });
        }

        init() {
            window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
            window.addEventListener('scroll', () => this.updateVirtualPoint());
        }

        isAtDocumentExtreme() {
            const scrollY = window.scrollY;
            const maxScroll = this.documentHeight - this.viewportHeight;
            
            return {
                top: scrollY < this.extremeThreshold,
                bottom: Math.abs(scrollY - maxScroll) < this.extremeThreshold
            };
        }

        needsHorizontalScroll(slider, scrollingDown) {
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            return scrollingDown ? 
                slider.scrollLeft < maxScroll - this.extremeThreshold :
                slider.scrollLeft > this.extremeThreshold;
        }

        getActiveSlider(scrollingDown) {
            const extremes = this.isAtDocumentExtreme();
            
            if (extremes.top && !scrollingDown) {
                return this.sliders.find(slider => slider.scrollLeft > 0);
            }
            
            if (extremes.bottom && scrollingDown) {
                return this.sliders.reverse().find(slider => 
                    slider.scrollLeft < slider.scrollWidth - slider.clientWidth
                );
            }

            return this.sliders.find(slider => {
                const rect = slider.getBoundingClientRect();
                const sliderCenter = rect.top + (rect.height / 2);
                return this.needsHorizontalScroll(slider, scrollingDown) && (
                    scrollingDown ? sliderCenter <= this.virtualPointY : sliderCenter >= this.virtualPointY
                );
            });
        }

        scrollSliderHorizontally(slider, delta) {
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const newScrollLeft = slider.scrollLeft + (delta * this.scrollSpeed);
            slider.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));
            
            return this.needsHorizontalScroll(slider, delta > 0);
        }

        updateVirtualPoint(scrollingDown = null) {
            if (scrollingDown === null) {
                scrollingDown = window.scrollY > this.lastScrollY;
            }

            const extremes = this.isAtDocumentExtreme();
            
            if (extremes.top) {
                this.virtualPointY = 0;
            } else if (extremes.bottom) {
                this.virtualPointY = this.viewportHeight;
            } else {
                this.virtualPointY = this.viewportHeight / 2;
            }
            
            this.lastScrollY = window.scrollY;
        }

        handleWheel(event) {
            // Check if it's a genuine scroll event (adapted from your logic)
            if (Math.abs(event.deltaY) != 120 && 
                'wheelDelta' in event && 
                Number.isInteger(event.deltaY) && 
                (Math.abs(event.deltaY) < 90 || 
                Object.is(-0, event.deltaX) || 
                event.deltaX != 0)) {
                return;
            }
            
            const scrollingDown = event.deltaY > 0;
            const isHorizontalScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);
            
            this.updateVirtualPoint(scrollingDown);
            
            const activeSlider = this.getActiveSlider(scrollingDown);
            if (!activeSlider) return;
            
            if (isHorizontalScroll) {
                activeSlider.scrollLeft += event.deltaX;
                event.preventDefault();
            } else if (this.scrollSliderHorizontally(activeSlider, event.deltaY)) {
                event.preventDefault();
            }
        }
    }

    // Measure margins and set CSS variables
    const full = document.getElementById('ti-measure-full');
    const content = document.getElementById('ti-measure-content');
    const body = document.body;
    
    const measure = function() {
        const fullRect = full.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const bodyRect = body.getBoundingClientRect();
        
        document.documentElement.style.setProperty(
            '--ti-margin-measure-left', `${contentRect.x}px`);
        document.documentElement.style.setProperty(
            '--ti-margin-measure-right', `${bodyRect.width - contentRect.width - contentRect.x}px`);
        document.documentElement.style.setProperty(
            '--ti-content-width', `${contentRect.width}px`);
    };
    
    measure();
    window.addEventListener('resize', measure);

    // Initialize scroll controller with your configuration
    new ScrollController({
        selector: '.ti-card-holder',
        scrollSpeed: 0.5,
        extremeThreshold: 20
    });
});
// Configuration
const MODAL_PREFIXES = ['modal-', 'popup-'];
let isProgrammaticModalOperation = false;
let isModalTransition = false;

function isModalId(id) {
    return MODAL_PREFIXES.some(prefix => id.startsWith(prefix));
}

function removeHash() {
    if (window.location.hash) {
        // When actively closing, push a new state without hash
        if (!isModalTransition) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        } else {
            // During modal transitions, just replace state
            history.replaceState('', document.title, window.location.pathname + window.location.search);
        }
    }
}

function handleModalHash() {
    const hash = window.location.hash.substring(1);
    if (hash && isModalId(hash)) {
        const modal = UIkit.modal(`#${hash}`);
        if (modal) {
            modal.show();
        }
    }
}

function setupModalHandlers(element) {
    const modalId = element.id;
    
    // Update URL when modal shows
    UIkit.util.on(element, 'beforeshow', () => {
        if (!isProgrammaticModalOperation && modalId && window.location.hash !== `#${modalId}`) {
            isModalTransition = true;
            history.pushState(modalId, document.title, `#${modalId}`);
        }
    });

    // Handle modal hiding
    UIkit.util.on(element, 'hide', () => {
        if (!isProgrammaticModalOperation && window.location.hash === `#${modalId}`) {
            // Check if this is a transition to another modal
            const otherModalOpening = document.querySelector('.uk-modal:not(.uk-modal-hiding)');
            isModalTransition = !!otherModalOpening;
            removeHash();
        }
    });

    // Reset transition flag after show
    UIkit.util.on(element, 'shown', () => {
        isModalTransition = false;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Setup handlers for existing modals
    document.querySelectorAll(MODAL_PREFIXES.map(p => `[id^="${p}"]`).join(',')).forEach(setupModalHandlers);

    // Watch for new modals
    new MutationObserver(mutations =>
        mutations.forEach(mutation =>
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id && isModalId(node.id)) {
                    setupModalHandlers(node);
                }
            })
        )
    ).observe(document.body, { childList: true, subtree: true });

    // Handle initial hash
    handleModalHash();
});

// Handle browser navigation
window.addEventListener('popstate', () => {
    isProgrammaticModalOperation = true;
    document.querySelectorAll('.uk-modal.uk-open').forEach(el => 
        UIkit.modal(el)?.hide()
    );
    handleModalHash();
    isProgrammaticModalOperation = false;
});
