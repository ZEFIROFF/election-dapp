import Card from './Card'

import React, { Component } from 'react'

export default class content extends Component {
    constructor(){
        super()
        this.state = {
            title: "Test name",
            desripition: "Test descr",
            id: 1
        }
    }
  render() {
    return (
      <div className="row">
        <Card title={this.state.title} desripition={this.state.desripition}/>
      </div>
    )
  }
}
// TSPK WSR