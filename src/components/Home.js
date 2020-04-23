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

    return []
}

export default Home