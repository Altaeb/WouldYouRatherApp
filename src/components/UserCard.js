import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
    Segment, 
    Header, 
    Grid, 
    Image 
} from 'semantic-ui-react'

import { colors } from '../utils/helpers'
import QuestionTeaser from './QuestionTeaser'
import QuestionContent from './QuestionContent'
import QuestionResult from './QuestionResult'

const questionTypes = {
    QUESTION_TEASER: 'QUESTION_TEASER',
    QUESTION_CONTENT: 'QUESTION_CONTENT',
    QUESTION_RESULT: 'QUESTION_RESULT'
}

const PollContent = props => {
    const { pollType, question, unanswered } = props

    switch(pollType) {
        case questionTypes.QUESTION_TEASER:
            return <QuestionTeaser question={question} unanswered={unanswered} />
        case questionTypes.QUESTION_CONTENT:
            return <QuestionContent question={question} />
        case questionTypes.QUESTION_RESULT:
            return <QuestionResult question={question} />
        default:
            return
    }
}

export class UserCard extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        pollType: PropTypes.string.isRequired,
        unanswered: PropTypes.bool,
        question_id: PropTypes.string
    }

    render () {
        
        const { author, question, pollType, unanswered = null } = this.props
        const tabColor = unanswered === true ? colors.green : colors.blue
        const borderTop = unanswered === null 
                                        ? `1px solid ${colors.grey}`
                                        : `2px solid ${tabColor.hex}`

        return (
            <Segment.Group>
                <Header 
                    as='h5'
                    textAlign='left'
                    block
                    attached='top'
                    style={{
                        borderTop: borderTop
                    }}
                    content={`${author.name} asks:`}
                />

                <Grid divided padded>   
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src={author.avatarURL} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            < PollContent 
                                pollType={pollType}
                                question={question}
                                unanswered={unanswered}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Group>
        )
    }
}

function mapStatToProps(
    { users, questions, authUser },
    { match, question_id } 
    ) {

        let question, pollType

        if(question_id !== undefined) {
            question = questions[question_id]
            pollType = questionTypes.QUESTION_TEASER
        } else {
            const { question_id } = match.params
            const user = users[authUser]

            question = questions[question_id]
            pollType = questionTypes.QUESTION_CONTENT

            if (Object.keys(user.answers).includes(question.id)) {
                pollType = questionTypes.QUESTION_RESULT
            }
        }

        const author = users[question.author]

        return {
            question,
            author,
            pollType
        }
}

export default connect(mapStatToProps)(UserCard); 