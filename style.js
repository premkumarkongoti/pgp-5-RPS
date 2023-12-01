document.addEventListener('DOMContentLoaded', () => {
    const rulesButton = document.getElementById('rules-button');
    const rulesModal = document.getElementById('rules-modal');
    const closeButton = document.getElementById('close-button');
    const playAgainBtn1 = document.querySelector('.play-again');

    rulesButton.addEventListener('click', () => {
        rulesModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        rulesModal.style.display = 'none';
    });

    playAgainBtn1.addEventListener("click", () => {
        // Reset the content to the original state
        document.location.reload();
    });
});





























