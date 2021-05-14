import React, { Component } from 'react'
import DadosPessoais from './DadosPessoais'
import DadosProfissionais from './DadosProfissionais'

class Form extends Component {
  render() {
    return(
      <form>
        <DadosPessoais />
        <DadosProfissionais />
      </form>
    )
  }
}

export default Form