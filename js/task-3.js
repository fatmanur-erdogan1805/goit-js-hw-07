// Giriş alanını ve çıkış span öğesini seç
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Input olayını dinleyerek değeri span içine yerleştir
nameInput.addEventListener("input", () => {
  // Kullanıcının girişini al, boşlukları temizle
  const trimmedValue = nameInput.value.trim();
  
  // Eğer giriş boşsa, "Anonymous" göster; aksi halde girilen değeri göster
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});