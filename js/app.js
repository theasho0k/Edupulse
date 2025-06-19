// js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = document.querySelector('input[name="role"]:checked').value;

    // You can add real login check here (in future)
    if (role === "student") {
      window.location.href = "student.html";
    } else if (role === "faculty") {
      window.location.href = "faculty.html";
    }
  });
});