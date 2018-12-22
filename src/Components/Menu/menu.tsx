import React, { Component } from 'react';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import Tweet from '../Tweet/Tweet';

export default class Menu extends React.Component<{}> {
    public render() {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/photos">Photos</NavLink>
                    </NavItem>
                    <NavItem>
                        <Tweet />
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
