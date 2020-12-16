import React, {Component} from 'react';
import './index.css';
import Service from '../../service';
import {set} from 'js-cookie';
import {withRouter} from "react-router-dom";

const initialState = {
    username: "",
    password: ""
}

class SignIn extends Component {
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
        this.service.createLogin(this.state).then((data) => {
                set('token', data["auth_token"]);
                this.setState(initialState)
                this.props.login()
                this.props.history.push("/")
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            if (res) {
                const data = await res.json()
                for (let index in data) {
                    const error = data[index]
                    this.setState({error: error[0]})
                }
            }

        })
    }

    render() {
        return (
            <div className='form-login'>
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.onSubmit} className='form-group m-2'>
                    <label htmlFor='Login'>Login</label>
                    <input onChange={this.onChange} className='form-control' name='username' type='text' id="Login"
                           value={this.state.username}/>
                    <label htmlFor='Password'>password</label>
                    <input onChange={this.onChange} className='form-control' name='password' type='password'
                           id="Password" value={this.state.password}/>
                    <button type="submit" className='btn btn-primary mt-2'>Sign In</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);