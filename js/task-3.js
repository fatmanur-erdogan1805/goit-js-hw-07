const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
<<<<<<< HEAD

function newName(event) {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
  console.log(event);
}

nameInput.addEventListener("input", newName);
=======
nameInput.addEventListener("input", () => {
function newName(event) {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymus";
  console.log(event);
 } 
})
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
