import React, { Component } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share'

export default class Tweet extends React.Component {

    public render() {
        return (
            <div>
                <TwitterShareButton url="https://375.supersize.love/" title="佐竹飯店後援会">
                    <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
            </div>
        );
    }
}


