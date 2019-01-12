import React from 'react';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import NavLink from 'reactstrap/lib/NavLink';
import { Link } from 'react-router-dom';
import NavItem from 'reactstrap/lib/NavItem';
import Nav from 'reactstrap/lib/Nav';
import Tweet from '../Tweet/Tweet';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import Collapse from 'reactstrap/lib/Collapse';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import Container from 'reactstrap/lib/Container';
import Col from 'reactstrap/lib/Col';
import { IoMdMenu } from "react-icons/io";

export default class NavbarSp extends React.Component<{}, { isOpen: boolean }> {

    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <Container fluid>
                <Col xs="12" md={{ size: 6, offset: 3 }}>
                    <Navbar expand="xs">
                        <NavbarBrand>
                            佐竹飯店後援会
                        </NavbarBrand>
                        {/* <Nav className="ml-auto" navbar>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav create="true" >
                                        <IoMdMenu size="2em" color="black"></IoMdMenu>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to="/">Home</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/about">About</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/photos">Photo</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Collapse>
                        </Nav> */}
                    </Navbar>
                </Col>

            </Container>

        );
    }
}