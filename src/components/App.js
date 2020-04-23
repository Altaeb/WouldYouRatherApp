import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'; 

class App extends Component {

  componentDidMount () {
    this.props.handleInitialData()
  }

  render ( ) {
    return(
      <div className='container'>
        <h1>Placeholder</h1>
      </div>
    )

  }
}

export default connect(null, {handleInitialData})(App);