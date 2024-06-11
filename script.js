function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.querySelector('.main-content').classList.add('blur-background');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.querySelector('.main-content').classList.remove('blur-background');
}
