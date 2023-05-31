
const ratingContainer = document.querySelector(".rating");
const thankYouContainer = document.querySelector(".thank-you");

const submitButton = document.querySelector("#submit");
const rateAgainButton=document.querySelector("#rate-again");

const rateButton=document.querySelectorAll('.rating-btn');
const youRated =document.querySelector('.you-rated');

submitButton.addEventListener("click", () => {

    thankYouContainer.classList.remove("hidden");
    ratingContainer.classList.add("hidden");
    // ratingContainer.style.display="none";
    
})

rateAgainButton.addEventListener("click", () => {
    ratingContainer.classList.remove("hidden");
    thankYouContainer.classList.add("hidden");
})

// Grep the rating from UI

rateButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        youRated.innerHTML=btn.innerHTML;
    })
})
