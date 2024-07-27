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