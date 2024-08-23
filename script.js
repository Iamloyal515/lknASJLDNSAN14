function randomRotation(element) {
    const rotation = Math.random() < 0.5 ? -5 : 5;
    element.style.transform = `translateY(-5px) rotate(${rotation}deg)`;
}


    function openModal() {
        const modal = document.getElementById('popupModal');
        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.getElementById('popupModal');
        modal.style.display = 'none';
    }
