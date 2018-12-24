import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardText from 'reactstrap/lib/CardText';

export default class Home extends React.Component {

    public render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>12/29 今年最後の肉の日一斉投票</CardTitle>
                    <img width="100%" src="./resources/1229.jpg" />
                    <CardText>
                        12/29（土）夜11:29頃<br />
                        #今年最後の肉の日一斉投票 <br />
                        #TC佐竹美奈子 <br />
                        #TheaterCalorie <br />
                        #シアターカロリー <br />
                        #ヒロインいちばん<br />
                    </CardText>
                </CardBody>
            </Card>

        );
    }
}