document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".accordion-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

