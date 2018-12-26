import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardText from 'reactstrap/lib/CardText';
import Badge from 'reactstrap/lib/Badge';
import CardImg from 'reactstrap/lib/CardImg';
import Col from 'reactstrap/lib/Col';
import NoticeTweet from '../../Components/Tweet/NoticeTweet';
import Container from 'reactstrap/lib/Container';

export default class Home extends React.Component {

    public render() {
        return (
            <Container>
                <Col xs="12" md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <CardTitle><Badge color="primary">New</Badge> 12/29 一斉投票の告知 </CardTitle>
                            <CardImg top responsive="true" src="./resources/1229_top.png" />
                            <CardText>
                                12/29(土) 11:29<br />
                                #主人公佐竹美奈子<br />
                                #今年最後の肉の日一斉投票<br />
                                <br />
                                告知Tweetをして盛り上げよう！
                        </CardText>
                            <NoticeTweet />
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}