import React , { Component } from 'react';
import EstadoFavorito from './EstadoFavorito'
import Nome from './Nome'
class Form extends Component {
  constructor() {
    super()

    this.state = {
      estadoFavorito: '',
      name:'',
      lastName:'',
      idade: 0,
      email:'',
      vaiComparecer: false,
    }

    this.handleEventChange = this.handleEventChange.bind(this)
  }

  handleEventChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Aqui está meu primeiro formulário via React</h1>
        <form className='FormContainer'>
          <EstadoFavorito 
            value={this.state.estadoFavorito} 
            handleEventChange={this.handleEventChange}
          />
          <br />
          <fieldset>
            <legend>Informações Pessoais</legend>
            <Nome 
              value={this.state.name} 
              handleEventChange={this.handleEventChange}
            />
          <br />
          <label>
            Sobrenome
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleEventChange}
              />
          </label>
          <br />
          <label>
            Qual a sua idade:
              <input
                type='number'
                name='idade'
                value={this.state.idade}
                onChange={this.handleEventChange}
              />
          </label>
          <br />
          <label>
            Qual o seu email?
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleEventChange}
              />
          </label>
          </fieldset>
          <label>
            Vai comparecer?
              <input
                type='checkbox'
                name='vaiComparecer'
                value={this.state.vaiComparecer}
                onChange={this.handleEventChange}
              />
          </label>
        </form>
      </div>
    )
  }
}

export default Form