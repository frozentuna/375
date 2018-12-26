import React, { Component } from 'react';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import NavLink from 'reactstrap/lib/NavLink';
import { Link } from 'react-router-dom';
import NavItem from 'reactstrap/lib/NavItem';
import Nav from 'reactstrap/lib/Nav';
import Tweet from '../Tweet/Tweet';
import Collapse from 'reactstrap/lib/Collapse';


export default class NavbarPc extends React.Component {

    public render() {
        return (
            <div>
                <Navbar expand="md" >
                    <NavbarBrand>
                        佐竹飯店後援会
                    </NavbarBrand>
                    <Collapse navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/photos">Photo</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}