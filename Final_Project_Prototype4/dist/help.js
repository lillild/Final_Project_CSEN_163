
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("open");

    const answer = faqItem.querySelector(".faq-answer");

    if (faqItem.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});


// Search filter
document.getElementById("faqSearch").addEventListener("input", function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll(".faq-item").forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(term) ? "block" : "none";
  });
});

// Contact form animation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("successMsg");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
  this.reset();
}); 

document.addEventListener("DOMContentLoaded", () => {
  const aiInput = document.getElementById("aiInput");
  const aiSend = document.getElementById("aiSend");
  const aiResponse = document.getElementById("aiResponse");

  const cannedAnswers = {
    "ingredients": "If ingredients aren’t showing, check spelling or add one at a time. You can also refresh the page.",
    "save": "Your ingredients auto-save locally, and you can reaccess them anytime you return.",
    "impact": "Your impact score rises the more you cook with food you already have — reducing waste!",
    "recipe": "Recipes are generated based on overlap between your ingredients and our categorized database."
  };

  aiSend.addEventListener("click", () => {
    const question = aiInput.value.toLowerCase();

    aiResponse.style.display = "block";
    aiResponse.innerHTML = "";
    
    let answer = "I'm not totally sure, but try rephrasing!";

    for (let key in cannedAnswers) {
      if (question.includes(key)) {
        answer = cannedAnswers[key];
        break;
      }
    }
    let i = 0;
    const speed = 25;
    function type() {
      if (i < answer.length) {
        aiResponse.innerHTML += answer.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  });
});

