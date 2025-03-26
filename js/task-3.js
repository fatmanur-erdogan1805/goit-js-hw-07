const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function newName(event) {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
  console.log(event);
}

nameInput.addEventListener("input", newName);