
document.addEventListener('DOMContentLoaded', () => {
    /* measure margins and set css variables */
    const full = document.getElementById('ti-measure-full');
    const content = document.getElementById('ti-measure-content');
    const body = document.body;
    const measure = function() {
        const fullRect = full.getBoundingClientRect();
        //console.log('Full:', fullRect);
        const contentRect = content.getBoundingClientRect();
        //console.log('Content:', contentRect);
        const bodyRect = body.getBoundingClientRect();
        //console.log('Body:', bodyRect);
        document.documentElement.style.setProperty(
            '--ti-margin-measure-left', `${contentRect.x}px`);
        document.documentElement.style.setProperty(
            '--ti-margin-measure-right', `${bodyRect.width - contentRect.width - contentRect.x}px`);
        document.documentElement.style.setProperty(
            '--ti-content-width', `${contentRect.width}px`);
    };
    measure();
    window.addEventListener('resize', measure);

    /* scroll animate items card-holders */

    const cardHolders = document.querySelectorAll('.ti-card-holder');
    cardHolders.forEach((cardHolder) => {
        // catch mouse scroll events and use them to scroll left and right
        cardHolder.addEventListener('wheel', (e) => {
            const scrollState = cardHolder.scrollLeft;
            cardHolder.scrollLeft += e.deltaY;
            if (scrollState !== cardHolder.scrollLeft) {
                e.preventDefault();
            }
        });        
    });
});
