//INTERAÇÃO BTNS
function scrollToSobreNos() {
    document.getElementById("sobreNos").scrollIntoView({ behavior: 'smooth' });
}

function scrollToCafeteria() {
    document.getElementById("Cafeteria").scrollIntoView({ behavior: 'smooth' });
}

function scrollToContato() {
    document.getElementById("Contato").scrollIntoView({ behavior: 'smooth' });
}
//INTERAÇÃO BTNS

//CARROSSEL
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

let scrollPosition = 0;
const cardWidth = cards[0].offsetWidth + 20; // Largura do card mais o gap

// Duplicar os itens do carrossel para criar o loop
cards.forEach((card) => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
});

nextButton.addEventListener('click', () => {
    scrollPosition -= cardWidth;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${scrollPosition}px)`;

    // Verifica se o carrossel chegou na metade para resetar sem que o usuário perceba
    setTimeout(() => {
        if (Math.abs(scrollPosition) >= carousel.scrollWidth / 2) {
            scrollPosition = 0;
            carousel.style.transition = 'none'; // Remove a transição temporariamente
            carousel.style.transform = `translateX(${scrollPosition}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out'; // Recoloca a transição
            }, 50);
        }
    }, 500); // Aguarda o término da animação antes de verificar
});

prevButton.addEventListener('click', () => {
    scrollPosition += cardWidth;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${scrollPosition}px)`;

    // Verifica se está no início para resetar para a metade do carrossel
    setTimeout(() => {
        if (scrollPosition >= 0) {
            scrollPosition = -carousel.scrollWidth / 2;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${scrollPosition}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    }, 500); // Aguarda o término da animação
});

//CARROSSEL
