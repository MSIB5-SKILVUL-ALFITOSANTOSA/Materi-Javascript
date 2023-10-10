// let pokemonFromPromise = [];
// fetch("https://pokeapi.deno.dev/pokemon?limit=6")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })

//   //   ================== OR ==================

//   .then((res) => {
//     console.log(res);
//     pokemonFromPromise = [...res];
//     console.log(pokemonFromPromise);
//   })
//   .catch((err) => console.log(err));

//   ====================async await==================

url = "https://pokeapi.deno.dev/pokemon?limit=6";

// async function getPokemon2() {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);
// }
// getPokemon2();

// add to html

let listPokemon = document.getElementById("list_Pokemon");

async function getPokemon() {
  try {
    let response = await fetch(url);
    let pokemons = await response.json();

    pokemons.forEach((item, index) => {
      let cardPokemon = `
        <div style="border: 1px solid  black; height:700px; width:900px;">
            <h2>${index + 1}</h2>
          <img src="${item.imageUrl}" alt="">
          <h3>${item.name}</h3>
        </div>`;
      listPokemon.innerHTML += cardPokemon;
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

getPokemon();
