import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class NotFound extends Component {
    render() {
        return (
            <Container textAlign='center'>
                <Header as='h1'>
                    404 Not Found
                </Header>
            </Container>
        )
    }
}

export default NotFound; 