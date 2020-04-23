import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'; 

import { Grid } from 'semantic-ui-react'


class App extends Component {

  componentDidMount () {
    this.props.handleInitialData()
  }

  render ( ) {
    return(
      <Router>
        <div className="App">
          <Content>
            <h1>Placeholder</h1>
          </Content>
        </div>
      </Router>
    )

  }
}

const Content = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{maxWidth: 550}}>
        { children }
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default connect(
  null, 
  {handleInitialData}
)(App);