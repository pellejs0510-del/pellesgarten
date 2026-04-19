document.addEventListener("DOMContentLoaded", () => {
  const mulchInput = document.getElementById("mulchInput");
  const hinweis = document.getElementById("mulchHinweis");

  mulchInput.addEventListener("input", () => {
    if (mulchInput.value > 0) {
      hinweis.style.display = "block";
    } else {
      hinweis.style.display = "none";
    }
  });
});
