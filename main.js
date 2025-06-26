document.addEventListener("DOMContentLoaded", () => {
  // Create Hello World heading
  const heading = document.createElement("h2");
  heading.textContent = "Hello World";
  heading.style.color = "gold";
  heading.style.textAlign = "center";
  document.body.appendChild(heading);

  // Add click animations to all cards
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'scale(0.97)';
    });

    card.addEventListener('mouseup', () => {
      card.style.transform = 'scale(1)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
