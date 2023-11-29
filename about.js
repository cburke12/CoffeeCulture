function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showSVGsOnScroll() {
    var svgs = document.querySelectorAll('.svg-container svg');
    for (var i = 0; i < svgs.length; i++) {
        if (isElementInViewport(svgs[i])) {
            svgs[i].classList.add('svg-visible');
        }
    }
}

// Event listener for scroll
window.addEventListener('scroll', showSVGsOnScroll);