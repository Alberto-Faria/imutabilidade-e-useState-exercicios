import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0
  });
  
  const [pokemon1, setPokemon1] = useState({
    name: "Psyduck",
    type: "Water",
    evolved: false,
    weight: 19,
    color: "yellow",
    image:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
    id: 0
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Pikachu",
    type: "Eletric",
    evolved: false,
    weight: 6,
    color: "yellow",
    image:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    id: 0
  });
  /* const pokemon1={
    name: ['Psyduck', 'Golduck'],
    type: ['Water', 'Water'],
    evolved: false,
    weigth: [19, 76],
    color: 'blue',
    image: ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png"],
    id: 0
  }

  const pokemon2={
    name: ['Pikachu', 'Raichu'],
    type: ['Eletric', 'Eletric/Psychic'],
    evolved: false,
    weigth: [6, 30],
    color: 'yellow',
    image: ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png"],
    id: 0
  } */
  
  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon} setPokemon={setPokemon}/>
      <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1}/>
      <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2}/>

      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
