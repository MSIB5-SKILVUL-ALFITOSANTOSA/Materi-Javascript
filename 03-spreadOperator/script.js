let hantu = {
  nama: "pocong",
  warna: "irenk",
  loncat: () => {
    console.log("pocong loncat");
  },
  ability: () => {
    console.log("pocong sleding");
  },
  jumpscare: () => {
    console.log("cilukbaaaaa");
  },
};

let namaHantu = hantu.nama;
// let {nama, sleding} = hantu

let { ability, ...pocongHijau } = hantu;
console.log(pocongHijau);

const skillHantu = ({ loncat, ability, jumpscare }) => {
  loncat();
  ability();
  jumpscare();
};

skillHantu(hantu);

// ===============================================

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [satu, dua, tiga, ...rest] = angka;
console.log(satu);
console.log(dua);
console.log(tiga);
console.log(rest);

let angkaTerakhir = angka[angka.length - 1];
console.log(angkaTerakhir);

// ===============================================

let mobil = {
  nama: "Ferarri",
  warna: "Merah",
  ngebut: () => {
    console.log("Mobil Ngebut");
  },
  ngerem: () => {
    console.log("Mobil Biru");
  },
};

let arr = [1, 2, 3, 4, 5];
// let car = mobil;// salah

let newArr = [...arr];
newArr[0] = 10;

// ===============================================

let car = { ...mobil };
car.nama = "wuijo";
car.warna = "biru";

console.log(arr);
console.log(newArr);

console.log(car);
console.log(mobil);
car.ngerem();
car.ngebut();
