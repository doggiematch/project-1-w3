document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const resetButton = document.querySelector(".btn-reset");
  const successMessage = document.getElementById("form-validated-send");

  resetButton.addEventListener("click", function () {
    successMessage.style.display = "none";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    let valid = true;

    function showError(input, message) {
      input.classList.add("input-error");
      let error =
        input.nextElementSibling; /*esto hace que no se repitan los mensajes cada vez q hacemos submit */
      if (!error || !error.classList.contains("error-msg")) {
        error = document.createElement("p");
        error.classList.add("error-msg");
        input.parentNode.appendChild(error);
      }

      error.textContent = message;
    }

    function clearError(input) {
      input.classList.remove("input-error");
      const error = input.parentNode.querySelector(".error-msg");
      if (error) error.remove();
    }

    if (nameInput.value === "") {
      showError(
        nameInput,
        "Please, complete the field FULL NAME with your name.",
      );
      valid = false;
    } else {
      clearError(nameInput);
    }
    if (!emailInput.value.includes("@")) {
      showError(emailInput, "Invalid email.");
      valid = false;
    } else {
      clearError(emailInput);
    }
    if (phoneInput.value.length < 6) {
      showError(phoneInput, "Please enter your phone number. Min 6 digits.");
      valid = false;
    } else {
      clearError(phoneInput);
    }
    if (messageInput.value.length < 5) {
      showError(messageInput, "Write us at least 5 characters.");
      valid = false;
    } else {
      clearError(messageInput);
    }
    if (!valid) return;

    console.log(
      nameInput.value,
      emailInput.value,
      phoneInput.value,
      messageInput.value,
    );

    successMessage.textContent =
      "Thank you for contacting us. We have received your message.";
    successMessage.style.display = "block";
  });
});
