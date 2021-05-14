import React , { Component } from 'react';

class EstadoFavorito extends Component {
  render(){
    const { value , handleEventChange} = this.props
    return (
      <label>
      Diga qual é seu estado favorito:
        <textarea
          name='estadoFavorito'
          value={ value}
          onChange={handleEventChange}
        />
    </label>
    )
  }
}

export default EstadoFavorito