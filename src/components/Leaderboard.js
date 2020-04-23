import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Segment,
    Header,
    Grid,
    Image,
    Label,
    Divider,
} from 'semantic-ui-react';

const colors = ['yellow', 'grey', 'orange'];

export class Leaderboard extends Component {

    static propType = {
        leaderboardData: PropTypes.array.isRequired
    }

    render () {

        const { leaderboardData } = this.props

        return (
            <Fragment>

            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    const leaderboardData = Object.values(users).map( user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.question.length,
        total: Object.values(user.answers).length + user.question.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0,3);

    return {
        leaderboardData
    };
}

export default connect(mapStateToProps)(Leaderboard); 