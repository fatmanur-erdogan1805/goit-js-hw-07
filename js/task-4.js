const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(loginForm);
  const email = formData. get ("e-posta").trim();
  const password = formData.get("şifre").trim();
  if (!email  || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const userData = { email, password };
  console.log(userData);

  loginForm.reset();
   
  });
  
  
