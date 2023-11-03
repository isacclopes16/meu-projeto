
document.addEventListener('DOMContentLoaded', function () {
    const img = document.querySelector('.delivery img');
    let currentPosition = 50; // Posição horizontal atual da imagem
    const speed = 25; // Velocidade do movimento (ajuste conforme necessário)
    const maxDistance = 850; // Distância máxima à direita

    window.addEventListener('wheel', function (event) {
        // Calcula a direção do movimento da roda do mouse
        const scrollDirection = event.deltaY > 0 ? 1 : -1;

        // Calcula a nova posição horizontal da imagem
        currentPosition += speed * scrollDirection;

        // Limita a imagem a uma margem máxima
        currentPosition = Math.min(currentPosition, maxDistance);

        // Move a imagem para a nova posição
        img.style.transform = `translateX(${currentPosition}px)`;
    });
});
