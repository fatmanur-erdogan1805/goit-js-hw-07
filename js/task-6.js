function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
<<<<<<< HEAD
    .padStart(6, "0")}`;
=======
    .padStart(6, 0)}`;
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
<<<<<<< HEAD
  boxesContainer.innerHTML = ""; // Önceki kutuları temizle

  let size = 30;
  const fragment = document.createDocumentFragment(); // Tek seferde eklemek için
=======
  boxesContainer.innerHTML = "";

  let size = 30;
  const fragment = document.createDocumentFragment();
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

<<<<<<< HEAD
  boxesContainer.appendChild(fragment); // Tek seferde ekle
=======
  boxesContainer.appendChild(box);
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
<<<<<<< HEAD
    input.value = ""; // Input alanını temizle
=======
    input.value = "";
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
  } else {
    alert("Lütfen 1 ile 100 arasında bir sayı girin!");
  }
});

<<<<<<< HEAD
destroyButton.addEventListener("click", destroyBoxes);
=======
destroyButton.addEventListener("click", destroyBoxes); {
   //
};
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
