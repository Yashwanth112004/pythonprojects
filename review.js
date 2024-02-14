let totalRating = 0;
let numRatings = 0;

function rate(stars) {
  totalRating += stars;
  numRatings++;
  updateAverageRating();
}

function updateAverageRating() {
  const average = totalRating / numRatings;
  const averageSpan = document.getElementById("average");
  averageSpan.innerText = average.toFixed(1);

  animateAverageRating();
}

function animateAverageRating() {
  const averageRatingElement = document.getElementById("average-rating");
  averageRatingElement.classList.add("animated");
  setTimeout(() => {
    averageRatingElement.classList.remove("animated");
  }, 1000);
}
