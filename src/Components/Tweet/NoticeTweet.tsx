import React, { Component } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share'
import Col from 'reactstrap/lib/Col';
import './Tweet.css'

export default class NoticeTweet extends React.Component {

    hashtags: string[] = ["満腹至極サスペンス", "主人公美奈子", "アイドル投票TC", "ミリシタTC"]
    cursorStyle: string = "cursor: pointer;"

    public render() {
        return (
            <Col xs={{ size: 2, offset: 4 }} md={{ size: 2, offset: 5 }}>
                <TwitterShareButton title="1月13日20時より主人公役佐竹美奈子一斉投票開始！" hashtags={this.hashtags} url="https://375.supersize.love/">
                    <div className="cursor">
                        <TwitterIcon size={48} round={true} />
                    </div>
                </TwitterShareButton>
            </Col>
        );
    }
}


