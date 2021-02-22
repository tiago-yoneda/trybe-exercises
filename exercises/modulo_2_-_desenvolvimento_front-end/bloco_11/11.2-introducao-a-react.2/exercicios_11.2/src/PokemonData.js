import React,{Component} from 'react'
import './PokemonData.css'

class PokemonData extends Component {
  render() {
    const {name, type, averageWeight, image} = this.props.Poke;
    
    return (
      <div className='pokemonAttributes'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default PokemonData