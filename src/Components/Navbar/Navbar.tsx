import React, { Component } from 'react';
import NavbarPc from './pc';
import NavbarSp from './sp';
import "./Navbar.css";

export default class Navbar375 extends React.Component {

    public render() {
        return (
            <div className="barcolor">
                <NavbarSp />
            </div>
        );
    }
}