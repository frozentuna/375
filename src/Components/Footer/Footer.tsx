import React, { Component } from 'react';
import Alert from 'reactstrap/lib/Alert';
import { FaTwitter, FaMastodon } from 'react-icons/fa';

export default class Footer extends React.Component {

    public render() {
        return (
            <Alert color="info" >
                created by まぐろうP<br />
                <FaTwitter /> @frozentuna<br />
                <FaMastodon /> frozentuna@imastodon.net<br />
            </Alert>
        );
    }
}