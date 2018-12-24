import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';

export default class Photos extends React.Component {

    public render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <img max-width="1334px" width="100%" src="./resources/minako01.jpg" />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <img max-width="1334px" width="100%" src="./resources/minako02.jpg" />
                    </CardBody>
                </Card>
            </div>
        );
    }
}