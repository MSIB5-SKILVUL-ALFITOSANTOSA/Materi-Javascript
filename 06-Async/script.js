// // =======callback=======

// console.log("// =======callback======= //");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("world");

// // ==============================================

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// ===============promise================

// console.log("// ===============promise================ //");

// function pembayaran(condition) {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       setTimeout(() => {
//         resolve("Pembayaran anda berhasil...");
//       }, 2000);
//     } else {
//       reject("Pembayaran anda gagal, silahkan coba lagi nanti...");
//     }
//   });
// }

// console.log("a");
// console.log("b");

// console.log(pembayaran(true));
// console.log(
//   pembayaran(true)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// );

// //apabila reject / false

// console.log(
//   pembayaran(false)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// );

// console.log("c");

// =================async await================

console.log("// =================async await================ //");

function pembayaran1(condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("Pembayaran anda berhasil...");
      }, 2000);
    } else {
      reject("Pembayaran anda gagal, silahkan coba lagi nanti...");
    }
  });
}

async function pembayaran2() {
  {
    try {
      let result = await pembayaran1(true);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}

pembayaran2();

pembayaran2().then((res) => console.log(res));

async function pembayaran3() {
  {
    try {
      let result = await pembayaran1(false);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}

pembayaran3().catch((err) => console.log(err));
