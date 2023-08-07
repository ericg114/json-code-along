let pokeIndex = 0;
/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */

console.log(pokemon);
/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */
function pokemonchange() {
    const nameHeading = document.querySelector("#poke_name");

    nameHeading.innerHTML = `#${pokemon[0].id}#${pokemon[0].name}`;
    
    const pokeImg = document.getElementById("poke_img");
    
    pokeImg.src = pokemon[pokeIndex].image[0];
    
    const types = document.getElementById("type");
    types.innerHTML = ${pokemon[pokeIndex].types[0]}-type;
    const statDivs = document.querySelectorAll("#poke_stat div");
    
    for (let i = 0; i < statDivs.length; i++) {
      const statDiv = statDivs[i].id;
      statDiv[i].style.["width"] = `${pokemon[pokeIndex].base.[stats] * 4}px`;
    }
}
/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */
const randomBtn = document.getElementById("random_btn");
randomBtn.addEventListener("click", () => {
  let randomInt = Math.floor(Math.random() * pokemon.length);
  pokeIndex = randomInt;
  pokemonchange();
}
