import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import Col from 'reactstrap/lib/Col';

export default class About extends React.Component {

    public render() {
        return (
            <Col xs="12" md={{ size: 6, offset: 3 }}>
                <Card>
                    <CardBody>
                        <CardTitle>who is 佐竹美奈子</CardTitle>
                        <img width="100%" src="./resources/who.jpg" />
                    </CardBody>
                </Card>
            </Col>
        );
    }
}