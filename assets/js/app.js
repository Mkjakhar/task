const toggleBtn = document.getElementById("toggle-btn");
function toggle() {
  toggleBtn.classList.toggle("active_toggle");
}
function showPassword() {
  const inputType = document.getElementById("password");
  if (inputType.type === "password") {
    inputType.type = "text";
  } else {
    inputType.type = "password";
  }
}
