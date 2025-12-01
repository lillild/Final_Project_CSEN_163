document.addEventListener("DOMContentLoaded", () => {

  const ingredientsSaved = document.getElementById("ingredientsSaved");
  const co2Saved = document.getElementById("co2Saved");
  const moneySaved = document.getElementById("moneySaved");
  const impactNumber = document.getElementById("impactNumber");
  const circle = document.querySelector(".progress-ring__circle");

  const stats = {
    ingredients: 32,
    co2: 5.6,
    money: 12.45,
    impact: 78
  };

  function animateNumber(element, end, suffix = "", duration = 1000) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      element.textContent = start + suffix;
      if (start >= end) clearInterval(timer);
    }, stepTime);
  }

  animateNumber(ingredientsSaved, stats.ingredients);
  animateNumber(co2Saved, stats.co2, " kg");
  animateNumber(moneySaved, stats.money, "$");

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    if (percent <= 40) circle.style.stroke = "#f7b7a3";
    else if (percent <= 70) circle.style.stroke = "#f1eaf0";
    else circle.style.stroke = "#6d1a36";
  }

  let current = 0;
  const progressInterval = setInterval(() => {
    if (current >= stats.impact) clearInterval(progressInterval);
    setProgress(current);
    impactNumber.textContent = current + "%";
    current++;
  }, 15);

  const tips = [
    "Try to combine leftovers into soups or stir-fry dishes! 🥘",
    "Use up vegetables first to prevent spoilage! 🥦",
    "Save dairy products by freezing extra portions 🧀",
    "Plan meals for the week to minimize waste 🍲",
    "Share ingredients with friends to reduce waste and save money 👯"
  ];

  const tipText = document.getElementById("tipText");
  const newTipBtn = document.getElementById("newTipBtn");

  function newTip() {
    const idx = Math.floor(Math.random() * tips.length);
    tipText.textContent = tips[idx];
  }

  newTipBtn.addEventListener("click", newTip);
  newTip();
});

