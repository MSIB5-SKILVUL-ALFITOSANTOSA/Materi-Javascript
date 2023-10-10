// let hewan = document.getElementById("hewan");
// let makhlukHidup = document.getElementById("makhluk-hidup");
// let makhluk = document.querySelector("ul");

// console.log(hewan);
// console.log(hewan.children);

// console.log(makhluk);
// console.log(makhlukHidup);

// ==================================================

const tampilkanHewan = () => {
  let hewan = document.getElementById("hewan");
  document.getElementById("hewan").innerHTML = "Ini hewan";
  console.log(hewan.nextSibling);
};

const tampilkanMakhluk = () => {
  let makhlukHidup = document.getElementById("makhluk-hidup");
  document.getElementById("makhluk-hidup").innerHTML = "ini makhluk hidup";
  console.log(makhlukHidup.children);
};

const ubahH1 = () => {
  let h1 = document.getElementById("title");
  document.getElementById("title").innerHTML = "Ini judul";
  console.log(h1);
};

// ============================================================

const tampilkanHewan2 = () => {
  let hewan = ["badak", "kuda", "kucing", "sapi", "kambing"];

  let listHewan = document.getElementById("listHewan");

  for (let i = 0; i < hewan.length; i++) {
    let cardHewan = `
   <div>
   <p>${hewan[i]}</p>
   </div>`;

    listHewan.innerHTML += cardHewan;
  }
};

// ============================================================
