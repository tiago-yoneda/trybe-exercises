import React , { Component } from 'react';

class Nome extends Component {

  render() {
    const { value , handleEventChange} = this.props
    return (
      <label>
      Nome
        <input
          type='text'
          name='name'
          value={ value }
          onChange={handleEventChange}
        />
    </label>
    )
}
}

export default Nome