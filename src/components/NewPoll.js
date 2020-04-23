import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Segment,
    Header,
    Grid,
    Divider,
    Form,
    Dimmer,
    Loader
} from 'semantic-ui-react';
import { handleSaveQuestion } from '../actions/questions'

export class NewPoll extends Component {

    static propTypes = {
        authUser: PropTypes.string.isRequired,
        handleSaveQuestion: PropTypes.func.isRequired
    };

    state = {
        validSubmit: false,
        isLoading: false,
        option1: '',
        option2: ''
    };

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render () {

        return (
            <Segment.Group>

            </Segment.Group>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    };
}

export default connect(
    mapStateToProps,
    { handleSaveQuestion }
)(NewPoll) 