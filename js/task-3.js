const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
function newName(event) {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymus";
  console.log(event);
 } 
})