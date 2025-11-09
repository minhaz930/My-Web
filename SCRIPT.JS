// ======== LOGIN FORM HANDLING ========
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const skip = document.getElementById("skipLogin");

  // jab form submit ho
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    overlay.style.display = "none"; // login band ho jaye
    alert("Welcome to Qspiders Institute Website!");
  });

  // skip login click par bhi band ho
  skip.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});

// ======== ADMISSION FORM HANDLING ========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("admissionForm");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "🎉 Your Admission Form has been Submitted Successfully!";
    form.reset();

    // message 4 sec baad gayab
    setTimeout(() => {
      msg.textContent = "";
    }, 4000);
  });
});

// ======== COUNTER ANIMATION (agar aage use karna ho) ========
const startCounter = (element, target) => {
  let count = 0;
  const step = Math.ceil(target / 100);
  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    element.textContent = count;
  }, 30);
};

// Example usage:
// const studentCount = document.querySelector("#studentCount");
// startCounter(studentCount, 1200);

// ======== FOOTER YEAR AUTO UPDATE ========
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});