const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.fa-regular');
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];
updateRating(0);


starsEl.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index);
    })
})

function updateRating(index) {
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translate(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    })
    starsEl.forEach((star, idx) => {
        if (idx < index + 1) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    })
}
