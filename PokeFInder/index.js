async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSpriteF = data.sprites.front_default;
        const pokemonSpriteFShiny = data.sprites.front_shiny;
        const pokemonSpriteB = data.sprites.back_default;
        const pokemonSpriteBShiny = data.sprites.back_shiny;
        const imgElement = document.getElementById("pokemonSprite");
        const imgElement2 = document.getElementById("img2");
        const imgElement3 = document.getElementById("img3");
        const imgElement4 = document.getElementById("img4");
        
        imgElement.src = pokemonSpriteF;
        imgElement.style.display = "block";
        imgElement2.src = pokemonSpriteFShiny;
        imgElement2.style.display = "block";
        imgElement3.src = pokemonSpriteB;
        imgElement3.style.display = "block";
        imgElement4.src = pokemonSpriteBShiny;
        imgElement4.style.display = "block";
        
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
