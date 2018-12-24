import React, { Component } from 'react';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import Tweet from '../Tweet/Tweet';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component<{}> {
    public render() {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink>
                            <Link to="/">Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/about">About</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/photos">Photos</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Tweet />
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
