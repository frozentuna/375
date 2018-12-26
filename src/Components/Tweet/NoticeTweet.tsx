import React, { Component } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share'
import Col from 'reactstrap/lib/Col';

export default class NoticeTweet extends React.Component {

    hashtags: string[] = ["今年最後の肉の日一斉投票", "主人公美奈子", "アイドル投票TC"]

    public render() {
        return (
            <Col xs={{ size: 2, offset: 4 }} md={{ size: 2, offset: 5 }}>
                <TwitterShareButton title="12/29に主人公役佐竹美奈子に投票をしよう！" hashtags={this.hashtags} url="http://urx3.nu/OPxt">
                    <TwitterIcon size={48} round={true} />
                </TwitterShareButton>
            </Col>
        );
    }
}


