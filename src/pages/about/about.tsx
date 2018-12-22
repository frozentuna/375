import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';

export default class About extends React.Component {

    public render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>who is 佐竹美奈子</CardTitle>
                    <img max-width="1334px" width="100%" src="./resources/who.jpg" />
                </CardBody>
            </Card>
        );
    }
}