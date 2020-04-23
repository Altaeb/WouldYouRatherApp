import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

const colors = {
    green: {
        name: 'green',
        hex: '#21ba45'
    },
    blue: {
        name: 'blue',
        hex: '#2185d0'
    }
}

export class Home extends Component {

    static propTypes = {
        userQuestionData: PropTypes.object.isRequired
    }

    render () {
        const { userQuestionData } = this.props

        return <Tab panes={panes({userQuestionData})} className='tab' />
    }

}

const panes = props => {
    const { userQuestionData } = props;

    return [
        {
            menuItem: 'Unanswered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.answered.map(question => (
                        <p>Placeholder unanswered</p>
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.unanswered.map(question => (
                        <p>Placeholder answered</p>
                    ))}
                </Tab.Pane>
            )
        }
    ]
}

function mapeStateToProps({ authUser, users, questions }) {
    const answeredIDs = Object.keys(users[authUser].answers)

    const answered = Object.values(questions)
                            .filter(question => answeredIDs.includes(question.id))
                            .sort((a, b) => b.timestamp - a.timestamp)
    const unanswered = Object.values(questions)
                            .filter(question => !answeredIDs.includes(question.id))
                            .sort((a, b) => b.timestamp - a.timestamp)

    return {
        userQuestionData: {
            answered,
            unanswered
        }
    }

}

export default connect(mapeStateToProps)(Home)  