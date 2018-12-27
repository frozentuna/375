import React, { Component } from 'react';
import Alert from 'reactstrap/lib/Alert';
import { FaTwitter, FaMastodon } from 'react-icons/fa';
import Container from 'reactstrap/lib/Container';
import "./Footer.css"
import Col from 'reactstrap/lib/Col';

export default class Footer375 extends React.Component {

    public render() {
        return (
            <div className="navbar" >
                <Container fluid>
                    <Col xs="12" md={{ size: 6, offset: 3 }}>
                        <footer>
                            <p>
                                created by まぐろうP<br />
                                <FaTwitter /> @frozentuna<br />
                                <FaMastodon /> frozentuna@imastodon.net<br />
                            </p>
                        </footer>
                    </Col>
                </Container>
            </div >
        );
    }
}