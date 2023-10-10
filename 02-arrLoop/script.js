let orang = ["Jalil", "Ariel", "Virna", "Alex"];

console.log(orang[0]);

// ======================Manipulasi Array======================

// Menambahkan data di akhir array
console.log("==========Push==========");
orang.push("Alzi");
console.log(orang);

console.log("==========Pop==========");
orang.pop();
console.log(orang);

console.log("==========Shift==========");
orang.shift();
console.log(orang);

console.log("==========Unshift==========");
orang.unshift("Adam");
console.log(orang);

console.log("==========Splice==========");
orang.splice(2, 0, "Heri", "Ihsan");
console.log(orang);

// ======================Looping======================
for (let i = 0; i < orang.length; i++) {
  console.log(orang[i]);
}
console.log("==========For Each==========");
orang.forEach((e, idx, arr) => {
  console.log(e, idx, arr);
});
console.log("==========For Of==========");
for (const iterator of orang) {
  console.log(iterator);
}
console.log("==========For In==========");
for (const key in orang) {
  console.log(orang[key]);
}
// ======================Map======================
console.log("==========Map==========");
orang.map((i, e) => {
  console.log(i, e);
  //   e = element, i = index
});

// melakukan loop pada array
// ada return value
// untuk manipulasi data pada array

let newOrang = orang.map((item) => {
  return `FS KM5 ${item}`;
});
console.log(newOrang);
console.log(orang[1]);

// ================================== map ======================

let orangImpostor = orang.map((item) => {
  if (item === "Ariel") {
    return "Ariel Impostor";
  } else {
    return item + " bukan impostor";
  }
});
console.log(orangImpostor);

// ================================== filter ======================

const cobaFilter = () => {
  var find = "Ariel";

  var result = orang.filter((item) => item === find);

  if (result.length > 0) {
    console.log("Data ditemukan yaitu = " + result);
  } else {
    console.log("data tidak ditemukan dari" + result);
  }
};

cobaFilter();

console.log(
  "(===================== multy dimensi array ======================)"
);
