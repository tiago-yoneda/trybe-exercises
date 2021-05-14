import React, { Component } from 'react'

const estadosBrasileiros = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

class DadosPessoais extends Component {
  render() {


    return(
      <fieldset>
        <legend>
          Dados Pessoais
        </legend>

        <div>
          Nome:
          <input
            type='text'
            name='name'
            maxLength = '30'
            required
          />
        </div>

        <div>
          email:
          <input
            type='text'
            name='email'
            maxLength = '30'
            required
          />
        </div>

        <div>
          CPF:
          <input
            type='text'
            name='CPF'
            maxLength = '11'
            required
          />
        </div>

        <div>
          Endereço:
          <input
            type='text'
            name='address'
            maxLength = '200'
            required
          />
        </div>

        <div>
          Cidade:
          <input
            type='text'
            name='city'
            maxLength = '50'
            required
          />
        </div>

        <div>
          Estado:
          <select
            name='countryState'
            required
          >
          <option value="">Selecionar...</option>
          {
            estadosBrasileiros.map((estado, key) => (
              <option key={key} >{estado}</option>
            ))
          }
          </select>
        </div>

        <div>
        <label>
          <input
            type='radio'
            name='housingType'
            value='house'
          />
          Casa
        </label>
        <label>
          <input
            type='radio'
            name='housingType'
            value='apt'
          />
          Apartamento
        </label>
        </div>
      </fieldset>
    )
  }
}

export default DadosPessoais