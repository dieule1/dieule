//(April 5, 2025 at midnight)
const startDate = new Date("2025-04-05T00:00:00");

function showLoading() {
  // Hide prompt screen, show loading screen
  document.getElementById("screen-1").classList.add("hidden");
  document.getElementById("screen-2").classList.remove("hidden");

  // Reset progress bar animation
  const fillBar = document.querySelector(".fill");
  fillBar.style.width = "0%";
  fillBar.classList.remove("fill"); // restart animation
  void fillBar.offsetWidth; // trick to re-trigger animation
  fillBar.classList.add("fill");

  // After 2.5s (same as CSS animation), show timer screen
  setTimeout(() => {
    document.getElementById("screen-2").classList.add("hidden");
    document.getElementById("screen-3").classList.remove("hidden");
    updateCounter();
    setInterval(updateCounter, 1000); // update every second
  }, 2500);
}

function maybeLater() {
  alert("sooo mean :(");
}

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff -= years * (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  diff -= months * (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("counter").innerHTML = `
    ${years} Years<br>
    ${months} Months<br>
    ${days} Days<br>
    ${hours} Hours<br>
    ${minutes} Minutes<br>
    ${seconds} Seconds
  `;
}