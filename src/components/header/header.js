import React, {Component, Fragment} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import Service from "../service";


class Header extends Component {
    service = new Service()

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    </Link>
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Service</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        {this.props.user.username ?
                            <Fragment><p style={{
                                color: "white",
                                marginTop: "13px",
                                marginRight: "8px"
                            }}>{this.props.user.username}</p>
                                <Button onClick={() => {
                                    this.service.deleteLogin().then(() => {
                                        this.props.logout()
                                    })
                                }} variant="outline-primary">Выход</Button>
                            </Fragment>
                            :
                            <Fragment>
                                <Link to={'/register'}>
                                    <Button className='mr-2' variant="outline-primary">Регистрация</Button>
                                </Link>
                                <Link to={'/signIn'}>
                                    <Button variant="outline-primary">Войти</Button>
                                </Link>
                            </Fragment>
                        }
                    </Form>
                </Container>
            </Navbar>
        );
    }
}

export default Header;