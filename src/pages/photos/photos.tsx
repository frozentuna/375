import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';

export default class Photos extends React.Component {

    public render() {
        return (
            <div>
                <Col xs="12" md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <img width="100%" src="./resources/minako01.jpg" />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <img width="100%" src="./resources/minako02.jpg" />
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}