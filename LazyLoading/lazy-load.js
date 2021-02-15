const images = document.querySelectorAll('img');
console.log(images);

const imgOptions = {
    thresholds: 1,
    rootMargin: '0px 0px -500px 0px'
};

const imgObserver = new IntersectionObserver(imgOptions, (entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry);
            // preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
});

images.forEach(image => {
    imgObserver.observe(image);
});