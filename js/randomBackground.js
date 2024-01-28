document.addEventListener("DOMContentLoaded", function () {
  // Array of background image filenames
  const backgrounds = ["background1.jpg", "background2.jpg", "background3.jpg"];

  // Get a random index
  const randomIndex = Math.floor(Math.random() * backgrounds.length);

  // Set the background image
  document.body.style.backgroundImage = `url('img/${backgrounds[randomIndex]}')`;
});
