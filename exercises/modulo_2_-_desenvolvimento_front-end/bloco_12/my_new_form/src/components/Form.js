import React, { Component } from 'react'
import PersonalData from './PersonalData'
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange({target}) {
    const { name, value} = this.target
  }

  render() {
    const { name } = this.state
    return(
      <form>
        <div>Here comes my 2 forms</div>
        <PersonalData value={ name }/>
      </form>
    )
  }
}

export default Form
