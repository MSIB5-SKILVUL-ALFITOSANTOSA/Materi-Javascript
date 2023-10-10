let email = document.getElementById("email");
let password = document.getElementById("password");
let card = document.getElementById("card");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(email.value, password.value);

  let cardUser = `
  <div class="card">
   <span>email anda adalah = ${email.value} </span>
   <br>
   <span>${password.value}</span>
    </div>`;

  card.innerHTML += cardUser;
});
