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
    // Get the main div
    const mainDiv = document.querySelector('.main');
    const name = document.querySelector('.name');

    // Ensure the main div fades in when the page loads
    mainDiv.style.transition = 'opacity 0.5s ease-in-out';
    name.style.transition = 'opacity 0.5s ease-in-out';
    mainDiv.style.opacity = '1';
    name.style.opacity = '1';

    // Handle internal navigation links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Handle only links navigating within the same origin
            if (link.href.startsWith(window.location.origin)) {
                e.preventDefault(); // Stop immediate navigation

                const target = link.href; // Get target URL

                // Start fade-out animation for the main div
                mainDiv.style.opacity = '0';
                name.style.opacity = '0';
                
                // Navigate to the new page after fade-out completes
                setTimeout(() => {
                    window.location.href = target;
                }, 500); // Match the CSS transition duration
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
