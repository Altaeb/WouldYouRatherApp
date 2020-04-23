import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { 
    Header,
    Button
} from 'semantic-ui-react';

export class QuestionTeaser extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        unanswered: PropTypes.bool.isRequired,
        color: PropTypes.string
    } 

    state = {
        viewQuestion: false
    }

    handleClick = e => {
        this.setState( prevState => ({
            viewQuestion: !prevState.viewQuestion
        }))
    }

    render() {
        const { question, unanswered, color } = this.props

        if (this.state.viewQuestion === true) {
            return <Redirect push to={`/questions/${question.id}`} />
        }

        return (
            <Fragment>
                <Header as='h5' textAlign='left'>
                    Would you rather:
                </Header>
                <p style={{ textAlign: 'center'}}>
                    { question.optionOne.text }
                    <br />
                    or
                </p>
                <Button 
                    color={color}
                    size='tiny'
                    fluid
                    onClick={this.handleClick}
                    content={unanswered === true ? 'Answer Pool' : 'Results'}
                />
            </Fragment>
        )
    }
} 