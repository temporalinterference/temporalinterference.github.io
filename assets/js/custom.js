document.addEventListener('DOMContentLoaded', () => {
    // Configuration constants
    
    // Multiplier applied to scroll delta values to control scroll speed
    // Higher values make scrolling more sensitive
    const SCROLL_MULTIPLIER = 1.5;
    
    // Number of pixels from the edge of scroll area to consider "at edge"
    // Used to determine when to allow vertical scrolling
    const EDGE_THRESHOLD = 1;
    
    // Time in milliseconds to wait after a touch event ends before
    // allowing mouse wheel events again. Prevents accidental wheel
    // events during and immediately after touch interactions
    const TOUCH_TIMEOUT = 1000;
    
    // Maximum time in milliseconds between wheel events to consider
    // them part of the same gesture. Used to detect touchpad gestures
    // which often generate rapid wheel events
    const WHEEL_THRESHOLD = 30;

    /* measure margins and set css variables */
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

    function isElCompletelyInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    /* Handle mouse wheel horizontal scrolling */
    const cardHolders = document.querySelectorAll('.ti-card-holder');
    
    cardHolders.forEach((cardHolder) => {
        let isTouching = false;
        let touchTimeout = null;
        let lastWheelTime = 0;
        
        // Track touch state
        cardHolder.addEventListener('touchstart', () => {
            isTouching = true;
            if (touchTimeout) {
                clearTimeout(touchTimeout);
                touchTimeout = null;
            }
        });
        
        cardHolder.addEventListener('touchend', () => {
            // Don't immediately clear isTouching - wait a bit
            if (touchTimeout) {
                clearTimeout(touchTimeout);
            }
            touchTimeout = setTimeout(() => {
                isTouching = false;
                touchTimeout = null;
            }, TOUCH_TIMEOUT);
        });

        // Handle only mouse wheel events
        cardHolder.addEventListener('wheel', (e) => {
            const now = Date.now();
            const timeSinceLastWheel = now - lastWheelTime;
            lastWheelTime = now;

            // Detect likely touchpad usage by checking for rapid wheel events
            if (timeSinceLastWheel < WHEEL_THRESHOLD) {
                isTouching = true;
                if (touchTimeout) {
                    clearTimeout(touchTimeout);
                }
                touchTimeout = setTimeout(() => {
                    isTouching = false;
                    touchTimeout = null;
                }, TOUCH_TIMEOUT);
            }
            
            // Ignore wheel events during touch/touchpad interaction
            if (isTouching || document.touchedElements?.length > 0) return;
            
            if (!isElCompletelyInViewport(cardHolder)) {
                return;
            }

            const maxScroll = cardHolder.scrollWidth - cardHolder.clientWidth;
            const currentScroll = cardHolder.scrollLeft;
            
            // Check if horizontal scrolling is possible
            if (maxScroll <= 0) {
                return;
            }

            // For vertical scroll (deltaY), check scroll position based on direction
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {  // Primarily vertical scroll
                const scrollingDown = e.deltaY > 0;
                const scrollingUp = e.deltaY < 0;
                
                // When scrolling down, only allow vertical if we're at right edge
                if (scrollingDown && currentScroll < maxScroll - EDGE_THRESHOLD) {
                    e.preventDefault();
                    cardHolder.scrollLeft = Math.min(maxScroll, currentScroll + (e.deltaY * SCROLL_MULTIPLIER));
                    return;
                }
                
                // When scrolling up, only allow vertical if we're at left edge
                if (scrollingUp && currentScroll > EDGE_THRESHOLD) {
                    e.preventDefault();
                    cardHolder.scrollLeft = Math.max(0, currentScroll + (e.deltaY * SCROLL_MULTIPLIER));
                    return;
                }
                
                // Otherwise, let the vertical scroll happen naturally
                return;
            }
            
            // For horizontal scroll (deltaX), behave normally
            e.preventDefault();
            const scrollAmount = (e.deltaX !== 0 ? e.deltaX : e.deltaY) * SCROLL_MULTIPLIER;
            cardHolder.scrollLeft = Math.max(0, Math.min(maxScroll, currentScroll + scrollAmount));
        }, { passive: false });
    });
});

// Flag to prevent recursive history manipulations
let isHandlingPopState = false;
let isDirectURLAccess = true;  // New flag for direct URL access

// Function to remove hash from URL
function removeHash() {
    if (window.location.hash && !isHandlingPopState) {
        // For direct URL access, use replaceState instead of pushState
        // to avoid adding an extra history entry
        const method = isDirectURLAccess ? 'replaceState' : 'pushState';
        history[method]('', 
            document.title, 
            window.location.pathname + window.location.search
        );
        isDirectURLAccess = false;  // Reset the flag after first use
    }
}

// Function to handle modal opening based on URL hash
function handleModalHash() {
    const hash = window.location.hash.substring(1);
    
    if (hash && (hash.startsWith('modal-') || hash.startsWith('popup-')) ) {
        const modal = UIkit.modal(`#${hash}`);
        
        if (modal) {
            modal.show();
        }
    }
}

// Set up modal event handlers
function setupModalHandlers(modalElement) {
    UIkit.util.on(modalElement, 'hidden', () => {
        removeHash();
    });
}

// Initialize all existing modals
function initializeModals() {
    document.querySelectorAll('[id^="modal-"],[id^="popup-"]').forEach(modalElement => {
        // Remove any existing hidden event listeners
        const newElement = modalElement.cloneNode(true);
        modalElement.parentNode.replaceChild(newElement, modalElement);
        setupModalHandlers(newElement);
    });
}

// Add history entry when modals are opened via clicks
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    
    if (link && link.hash && (link.hash.startsWith('#modal-') || link.hash.startsWith('#popup-'))) {
        e.preventDefault();
        isDirectURLAccess = false;  // Not a direct URL access
        
        const modalId = link.hash.substring(1);
        const modal = UIkit.modal(`#${modalId}`);
        
        if (modal) {
            history.pushState('', document.title, `${window.location.pathname}${link.hash}`);
            modal.show();
        }
    }
});

// Listen for hash changes while navigating
window.addEventListener('hashchange', (e) => {
    if (!isHandlingPopState) {
        isDirectURLAccess = false;  // Not a direct URL access
        handleModalHash();
    }
});

// Check for hash when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeModals();
    handleModalHash();
    
    // Re-attach modal event listeners on dynamic content changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.id && ( node.id.startsWith('modal-') || node.id.startsWith('popup-') )) {
                    setupModalHandlers(node);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    isHandlingPopState = true;
    isDirectURLAccess = false;  // Not a direct URL access
    
    const openModals = document.querySelectorAll('.uk-modal.uk-open');
    openModals.forEach(modalElement => {
        const modal = UIkit.modal(modalElement);
        if (modal) {
            modal.hide();
        }
    });
    
    handleModalHash();
    
    setTimeout(() => {
        isHandlingPopState = false;
    }, 100);
});