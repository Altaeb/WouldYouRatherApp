import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Grid,
    Header,

    Form,
    Loader,
    Dimmer
} from 'semantic-ui-react'

import { setAuthUser } from '../actions/authUser'

export class Login extends Component {

    state = {
        loading: false
    }

    handleLoading = () => {
        this.setState({
            loading: true
        })
    }

    render() {
        return (
            <Fragment>
                <Segment.Group>
                    <LoginHeader />
                    <LoginGrid
                        form={<ConnectedLoginForm
                            onLoading={this.handleLoading}
                        />}
                        loading={this.state.loading}
                    />
                </Segment.Group>
            </Fragment>
        )
    }
}

const LoginHeader = () => (
    <Header as="h4" block attached='top' textAlign='center'>
        <Header.Content>Would You Rather App</Header.Content>
        <Header.Subheader>Sign in to continue</Header.Subheader>
    </Header>
)

const LoginGrid = ({ form, loading }) => (
    <div>
        <Grid padded textAlign='center'>
            <Grid.Row className='login'>
                <Grid.Column width={16}>
                    {loading === true && (
                        <Dimmer active inverted>
                            <Loader inverted content="Loading" />
                        </Dimmer>
                    )}
                    <br />
                    { form }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

class LoginForm extends Component {

    static propTypes = {
        onLoading: PropTypes.func.isRequired
    }

    state = {
        value: ''
    }

    onChange = (e, { value }) => {
        this.setState({ value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { onLoading, setAuthUser } = this.props
        const authUser = this.state.value

        new Promise((res, rej) => {
            onLoading()
            setTimeout(() => res(), 500)
        }).then(() => setAuthUser(authUser))
    }

    generateDropdownData = () => {
        const { users } = this.props

        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: { avatar: true, src: user.avatarURL}
        }))
    }

    render() {
        const { value } = this.state
        const disabled = value === '' ? true : false

        return (
            <Form onSubmit={this.handleSubmit}>
                <Header as='h3' color='green'>
                    Sign In
                </Header>
                <Form.Dropdown 
                    placeholder='Select User'
                    fluid
                    selection
                    scrolling
                    options={this.generateDropdownData()}
                    value={value}
                    onChange={this.onChange}
                    required
                />
                <Form.Button content="Log In" positive disabled={disabled} fluid />
            </Form>
        )   
    } 
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

const ConnectedLoginForm = connect(
    mapStateToProps,
    { setAuthUser }
)(LoginForm)

export default Login 