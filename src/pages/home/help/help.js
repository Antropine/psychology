import React, { Component } from 'react'
import './help.css'
import Form from '../form/form'

export default class Help extends Component {
  render() {
    return (
      <div className='help' id='help'>
        <Form title="Мы поможем с выбором специалиста" />
      </div>

    )
  }
}
