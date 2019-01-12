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
import "./home.css"

export default class Home extends React.Component {

    public render() {
        return (
            <Container>
                <Col xs="12" md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <CardTitle><Badge color="primary">New</Badge> 1/13 20:00 一斉投票 </CardTitle>
                            <CardImg top responsive="true" src="./resources/ogp_02.jpg" />
                            <CardText>
                                イベントのセンター未経験<br />
                                豊富なホラーイベント経験<br />
                                シリアスな演技にも定評あり<br />
                                <br />
                                佐竹美奈子はまだ見ぬ可能性を秘めている！<br />
                                あなたの1票が実現への1歩になる！
                            </CardText>
                            <NoticeTweet />
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}