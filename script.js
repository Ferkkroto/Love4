// script.js

document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const flowers = [
        'img/flower1.png',
        'img/flower2.png',
        'img/flower3.png',
        'img/flower4.png',
        'img/flower5.png'
    ];

    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            const flower = document.createElement('img');
            flower.src = flowers[index];
            flower.className = 'flower';
            flower.style.left = photo.offsetLeft + 'px';
            flower.style.top = photo.offsetTop + 'px';

            document.querySelector('.container').appendChild(flower);
            photo.classList.add('hidden');
        });
    });

    // Corazones animados
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heartsContainer.appendChild(heart);
    }
});
