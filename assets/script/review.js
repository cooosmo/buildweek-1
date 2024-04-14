/* VALUTAZIONE STELLE */
let stars = document.getElementsByClassName("star");

// Aggiungi event listener per il click su ogni stella
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function() {
        let rating = i + 1;
        setRating(rating);
        console.log('sono dentro')
    });

    // Aggiungi event listener per l'evento mouseover su ogni stella
    stars[i].addEventListener("mouseover", function() {
        highlightStars(i + 1);
    });

    // Aggiungi event listener per l'evento mouseout su ogni stella
    stars[i].addEventListener("mouseout", function() {
        removeHighlight();
    });
}

function setRating(n) {
    remove(); 

    for (let i = 0; i < n; i++) {
        let cls = "star-blue";
        stars[i].className = "star " + cls;
    }
}

function remove() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star";
    }
}

function highlightStars(n) {
    for (let i = 0; i < n; i++) {
        stars[i].classList.add("star-highlight");
    }
}

function removeHighlight() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("star-highlight");
    }
}

let reviewForm = document.querySelector('.review-comment')
let sendComment = document.querySelector('#send-comment')

console.log(reviewForm.value)
console.log(sendComment)

reviewForm.addEventListener('change', ()=>{
    sendComment.addEventListener('click', ()=>{
        console.log('ciao')
        alert('Grazie per il commento')
        })
})
