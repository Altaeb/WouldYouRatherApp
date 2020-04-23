import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'; 

import { Grid } from 'semantic-ui-react'

import Login from './Login'
import Nav from './Nav';
import Home from './Home';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {

    const { authUser } = this.props

    return(
      <Router>
        <div className="App">
                    { authUser === null ? (
              <Route 
                render={()=>(
                  <Content>
                    <Login />
                  </Content>
                )}
              />
            ) : (
              <Fragment>
              <Nav />
              <Content>
                <Route exact path='/' />
                <Route exact path='/' component={Home} />
              </Content>
            </Fragment>

          )}
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

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(
  mapStateToProps, 
  { handleInitialData }
)(App);