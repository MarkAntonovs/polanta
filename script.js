function openModal(propertyId) {
    document.getElementById('propertyModal').style.display = 'block';
    document.querySelector('.main-content').classList.add('blur-background');
}

function closeModal() {
    document.getElementById('propertyModal').style.display = 'none';
    document.querySelector('.main-content').classList.remove('blur-background');
}
