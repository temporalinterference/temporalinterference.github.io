document.addEventListener('DOMContentLoaded', () => {
    // Configuration constants
    const SCROLL_MULTIPLIER = 0.5;
    const EDGE_THRESHOLD = 20;

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

    /* Handle scrolling for each card holder */
    const cardHolders = document.querySelectorAll('.ti-card-holder');
    
    cardHolders.forEach((cardHolder) => {
        // Disable smooth scrolling behavior
        cardHolder.style.scrollBehavior = 'auto';
        
        let isPointerDown = false;
        let activePointerId = null;
        let grabX = 0;
        let initialScroll = 0;

        cardHolder.addEventListener('pointerdown', (e) => {
            isPointerDown = true;
            activePointerId = e.pointerId;
            grabX = e.clientX;
            initialScroll = cardHolder.scrollLeft;
            
            cardHolder.setPointerCapture(e.pointerId);
            
            if (e.pointerType === 'mouse') {
                cardHolder.style.cursor = 'grabbing';
            }
            
            e.preventDefault();
        });

        cardHolder.addEventListener('pointermove', (e) => {
            if (!isPointerDown || e.pointerId !== activePointerId) return;
            
            const moveX = e.clientX - grabX;
            
            // Use transform for immediate visual feedback
            requestAnimationFrame(() => {
                cardHolder.scrollLeft = initialScroll - moveX;
            });
            
            e.preventDefault();
            e.stopPropagation();
        });

        const endPointerDrag = (e) => {
            if (e.pointerId === activePointerId) {
                if (e.pointerType === 'mouse') {
                    cardHolder.style.cursor = 'grab';
                }
                isPointerDown = false;
                try {
                    cardHolder.releasePointerCapture(e.pointerId);
                } catch (err) {}
                activePointerId = null;
            }
        };

        cardHolder.addEventListener('pointerup', endPointerDrag);
        cardHolder.addEventListener('pointercancel', endPointerDrag);
        cardHolder.addEventListener('lostpointercapture', endPointerDrag);

        cardHolder.style.cursor = 'grab';

        cardHolder.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) < 90 || Object.is(-0, e.deltaX) || e.deltaX < 0) {
                return;
            }
            
            if (!isElCompletelyInViewport(cardHolder)) {
                return;
            }

            const maxScroll = cardHolder.scrollWidth - cardHolder.clientWidth;
            const currentScroll = cardHolder.scrollLeft;
            
            if (maxScroll <= 0) {
                return;
            }

            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                const scrollingDown = e.deltaY > 0;
                const scrollingUp = e.deltaY < 0;
                
                if (scrollingDown && currentScroll < maxScroll - EDGE_THRESHOLD) {
                    e.preventDefault();
                    cardHolder.scrollLeft = Math.min(maxScroll, currentScroll + (e.deltaY * SCROLL_MULTIPLIER));
                    return;
                }
                
                if (scrollingUp && currentScroll > EDGE_THRESHOLD) {
                    e.preventDefault();
                    cardHolder.scrollLeft = Math.max(0, currentScroll + (e.deltaY * SCROLL_MULTIPLIER));
                    return;
                }
                
                return;
            }
            
            e.preventDefault();
            const scrollAmount = (e.deltaX !== 0 ? e.deltaX : e.deltaY) * SCROLL_MULTIPLIER;
            cardHolder.scrollLeft = Math.max(0, Math.min(maxScroll, currentScroll + scrollAmount));
        }, { passive: false });
    });
});
// Configuration
const MODAL_PREFIXES = ['modal-', 'popup-'];
let isHandlingPopState = false;

function isModalId(id) {
    return MODAL_PREFIXES.some(prefix => id.startsWith(prefix));
}

function removeHash() {
    if (window.location.hash) {
        // Only keep hash if we're handling a popstate
        if (!isHandlingPopState) {
            history.pushState(
                '', 
                document.title, 
                window.location.pathname + window.location.search
            );
        }
    }
}

function handleModalHash() {
    const hash = window.location.hash.substring(1);
    if (hash && isModalId(hash)) {
        const modal = UIkit.modal(`#${hash}`);
        modal?.show();
    }
}

// Event handlers for modals
function setupModalHandlers(element) {
    // Handle showing of modal
    UIkit.util.on(element, 'show', () => {
        const modalId = element.id;
        if (modalId && window.location.hash !== `#${modalId}`) {
            history.pushState('', document.title, `${window.location.pathname}#${modalId}`);
        }
    });

    // Handle hiding of modal
    UIkit.util.on(element, 'hidden', removeHash);
}

// Initialize and observe
document.addEventListener('DOMContentLoaded', () => {
    // Setup existing modals
    document.querySelectorAll(MODAL_PREFIXES.map(p => `[id^="${p}"]`).join(',')).forEach(el => {
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        setupModalHandlers(newEl);
    });

    // Handle initial hash
    handleModalHash();

    // Observe new modals
    new MutationObserver(mutations => 
        mutations.forEach(mutation => 
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id && isModalId(node.id)) {
                    setupModalHandlers(node);
                }
            })
        )
    ).observe(document.body, { childList: true, subtree: true });
});

// Handle browser navigation
window.addEventListener('hashchange', () => {
    if (!isHandlingPopState) {
        handleModalHash();
    }
});

window.addEventListener('popstate', () => {
    isHandlingPopState = true;
    
    document.querySelectorAll('.uk-modal.uk-open').forEach(el => 
        UIkit.modal(el)?.hide()
    );
    
    handleModalHash();
    
    setTimeout(() => {
        isHandlingPopState = false;
    }, 100);
});