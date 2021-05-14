import React, { Component} from 'react'

class PersonalData extends Component{
  render() {
    return(
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor='name-input'>
          Nome: 
          <input
            type='text'
            id='name-input'
            name='name'
            maxLength='40'
            // value
            // onChange
          />
        </label>
      </fieldset>
    )
  }
}

export default PersonalData