import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

class GrossTaxView extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Content header='Calculate Gross Income Tax' />

                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default GrossTaxView;