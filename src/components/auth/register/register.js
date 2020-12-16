import React, {Component} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import Service from "../../service";
import './index.css'

const initialState = {
    name: "",
    surname: "",
    username: "",
    password: "",
    password2: "",
    email: ""
}

class Register extends Component {
    service = new Service()

    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget
        this.setState({
            [elem.name]: elem.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const state = this.state
        if (state.password !== state.password2) {
            this.setState({error: "Password not same"})
            return;
        }
        this.service.createUser(this.state).then((data) => {
                console.log(data)
                this.setState(initialState)
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            const data = await res.json()
            for (let index in data) {
                const error = data[index]
                this.setState({error: error[0]})
            }
        })
    }

    render() {
        return (
            <div className='register'>
                <Container className='mb-4 mt-4'>
                    {this.state.error && <p>{this.state.error}</p>}
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Col className='col-3'>
                                <Form.Label htmlFor='Name'>Name</Form.Label>
                                <Form.Control onChange={this.onChange} name='name' type='text' id='Name'
                                              value={this.state.name}/>
                            </Col>
                            <Col className='col-4'>
                                <Form.Label htmlFor='SurName'>Surname</Form.Label>
                                <Form.Control onChange={this.onChange} name='surname' type='text' id='SurName'
                                              value={this.state.surname}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col className='col-7'>
                                <Form.Label htmlFor='Email'>Login</Form.Label>
                                <Form.Control onChange={this.onChange} name='username' type='text' id='UserName'
                                              value={this.state.username}/>
                            </Col>r
                        </Form.Row>
                        <Form.Row>
                            <Col className='col-7'>
                                <Form.Label htmlFor='Email'>Email</Form.Label>
                                <Form.Control onChange={this.onChange} name='email' type='text' id='Email'
                                              value={this.state.email}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col className='col-7'>
                                <Form.Label htmlFor='Password'>Password</Form.Label>
                                <Form.Control onChange={this.onChange} name='password' type='password' id='Password'
                                              value={this.state.password}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col className='col-7'>
                                <Form.Label htmlFor='Password2'>Confirm password</Form.Label>
                                <Form.Control onChange={this.onChange} name='password2' type='password' id='Password2'
                                              value={this.state.password2}/>
                            </Col>
                        </Form.Row>
                        <Button className='mt-4' type="submit" variant="success">Register</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Register;