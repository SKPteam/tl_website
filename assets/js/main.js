/* ========================  P R E L O A D E R  ======================= */

if (document.readyState == 'loading') {
    let width = 0
    for (let i = 0; i < 101; i++) {
        width = width + 1
    }
    document.querySelector('#preloader .progress .progress-bar').style.width = width + '%';
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');

        // after the preloader is done loading,
        // it calls the ready function.
        // The ready funtion contains all the functions and click events that would be handled in the site.
        ready();
    });
}

function ready () {
    // Your existing code for other functionality goes here
    
    /* ========================  S C R O L L     T O     T O P  ======================= */
    window.addEventListener('scroll', ()=> {
        if (window.pageYOffset > 400) {
            document.querySelector('.scroll-to-top').classList.add('active');
        } else {
            document.querySelector('.scroll-to-top').classList.remove('active');
        }
    });
}

