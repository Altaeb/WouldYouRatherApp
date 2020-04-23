import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Menu,
    Responsive,
    Image,
    Button,
    Container
} from 'semantic-ui-react'

import { setAuthUser } from '../actions/authUser'

class Nav extends Component {

    handleLogout = e => {
        e.preventDefault()
        this.props.setAuthUser(null);
    }

    render () {

       const { authUser, users } = this.props

        return (
            <Container>
                <Responsive as={Menu} minWidth='651' pointing secondary>
                    <Menu.Item name='home' as={NavLink} to='/' exact />
                    <Menu.Item name='new question' as={NavLink} to='/add' />
                    <Menu.Item name='leader board' as={NavLink} to='/leaderboard' />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <span>
                                <Image 
                                    src={users[authUser].avatarURL}
                                    avatar
                                    spaced='right'
                                    verticalAlign='middle'
                                />
                                {users[authUser].name}
                            </span>
                        </Menu.Item>
                        <Menu.Item>
                            <Button 
                                content='logout'
                                labelPosition='right'
                                basic
                                compact
                                icon='log out'
                                size='mini'
                                onClick={this.handleLogout}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Responsive>
            </Container>
        )
    }
}

function mapStateToProps({ users, authUser }) { 
    return {
        authUser,
        users
    }
}

export default connect(
    mapStateToProps,
    { setAuthUser }
)(Nav)