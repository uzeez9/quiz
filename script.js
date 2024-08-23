function showSection(sectionClass) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('.' + sectionClass).classList.add('active');
}
