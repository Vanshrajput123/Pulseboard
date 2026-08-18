const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const decisionBtn = document.getElementById("decisionBtn");
const decisionNote = document.getElementById("decisionNote");
decisionBtn.addEventListener("click", () => {
  decisionBtn.innerHTML = "Added to roadmap ✓";
  decisionBtn.disabled = true;
  decisionNote.textContent = "Decision saved for your next planning session.";
});

// Small easter egg: type PULSE anywhere on the page.
let secret = "";
window.addEventListener("keydown", (event) => {
  secret = (secret + event.key.toUpperCase()).slice(-5);
  if (secret === "PULSE") {
    document.body.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-5px)" },
       { transform: "translateX(5px)" }, { transform: "translateX(0)" }],
      { duration: 300, iterations: 2 }
    );
    document.querySelector(".brand").title = "You found the signal.";
  }
});
