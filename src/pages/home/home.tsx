import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Menu from '../../Components/Menu/menu';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';


export default class Home extends React.Component {

    public render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>12/29 今年最後の肉の日一斉投票</CardTitle>
                    <img max-width="755px" width="100%" src="./resources/1229.jpg" />
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