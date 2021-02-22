import React, {Component} from 'react'
import './App.css';
import PokemonData from './PokemonData'
import pokemons from './data'

class App extends Component {
  render(){
    return (
      <div>
        <h1>Pokedex</h1>
        <section className='PokemonContainer'>
        {pokemons.map((pokemon, index) => <PokemonData key={index} Poke={pokemon} />)}
        </section>
      </div>
    );
  }
}

export default App;
