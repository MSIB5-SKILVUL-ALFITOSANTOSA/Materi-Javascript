let btnLocal = document.getElementById("btn-local");
let btnSession = document.getElementById("btn-session");
let btnCookie = document.getElementById("btn-cookie");

btnLocal.addEventListener("click", () => {
  let kucing = ["jerry", "tom", "garfield"];
  let buah = {
    nama: "apel",
    warna: "merah",
  };

  localStorage.setItem("kucing", JSON.stringify(kucing));
  localStorage.setItem("buah", JSON.stringify(buah));
  localStorage.setItem("name", "John");
  const buah2 = JSON.parse(localStorage.getItem("buah"));
  console.log(buah2);
  const kucing2 = JSON.parse(localStorage.getItem("kucing"));
  console.log(kucing2);
});

btnSession.addEventListener("click", () => {
  sessionStorage.setItem("name", "John");
});

btnCookie.addEventListener("click", () => {
  document.cookie = "name=John";
});
