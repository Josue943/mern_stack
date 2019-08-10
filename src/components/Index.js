import React, { Component } from 'react'
import Form from './Form'
import logo from '../logo.svg'

 export default class Index extends Component {
    
   
    render() {
        return (
            <div>
           <nav className="light-blue darken-4">
            <div className="container">
            <img src={logo} width="100"/>
            <a className="brand-logo" href="/">Mern stack</a>
            </div>
           </nav>
           <div className="container">
                <Form/>
        </div>

      </div>
    )
  }
}
