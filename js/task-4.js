  // Formu seç
const loginForm = document.querySelector(".login-form");

// Form submit olayını dinle
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Sayfanın yenilenmesini engelle

  // Form öğelerine eriş
  const { email, password } = event.currentTarget.elements;

  // Alanları temizleyerek değerleri al
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Eğer herhangi bir alan boşsa, uyarı göster
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Kullanıcı verilerini nesneye ekleyerek konsola yazdır
  const userData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData);

  // Formu sıfırla
  loginForm.reset();
});

  
  
