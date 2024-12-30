function filterGallery(category) {
    var projects = document.getElementsByClassName('project');
    for (var i = 0; i < projects.length; i++) {
        if (category === 'all') {
            projects[i].classList.add('show');
            projects[i].classList.remove('hide');
        } else {
            projects[i].classList.remove('show');
            projects[i].classList.add('hide');
            if (projects[i].classList.contains(category)) {
                projects[i].classList.add('show');
                projects[i].classList.remove('hide');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.querySelector('.main');
    const name = document.querySelector('.name');

    // Set transitions, but don't change opacity
    mainDiv.style.transition = 'opacity 0.5s ease-in-out';
    name.style.transition = 'opacity 0.5s ease-in-out';

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href.startsWith(window.location.origin)) {
                e.preventDefault();

                const target = link.href;

                // Only set opacity to 0 when navigating away
                mainDiv.style.opacity = '0';
                name.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.querySelector('.topbar');
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight; 

    window.addEventListener('scroll', () => {
        if (window.scrollY >= (pageHeight / 5)) {
            topbar.classList.add('slide-up');
        } else {
            topbar.classList.remove('slide-up');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.backtotop');
    backToTop.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});
