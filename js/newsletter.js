const form = document.querySelector(".newsletter-email");
const emailInput = document.querySelector(".newsletter-email input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value === "" || !emailInput.value.includes("@")) {
    alert("Invalid email");
  } else {
    alert("You have successfully subscribed!");
    emailInput.value = "";
  }
});
