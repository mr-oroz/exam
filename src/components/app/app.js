import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/header";
import Main from "../main";
import Footer from "../footer/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "../auth/register/register";
import SignIn from "../auth/sign-in/sign-in";
import Service from "../service";
import {remove} from "js-cookie";
import ProductDetail from "../server-detail/product-detail";

class App extends Component {

    service = new Service()
    state = {
        user: {}
    }

    componentDidMount() {
        this.login()
    }

    login = () => {
        this.service.getUser().then((data) => {
            this.setState({user: data})
        }).catch(() => {
            this.logout()
        })
    }

    logout = () => {
        remove("token")
        this.setState({user: {}})
    }

    render() {
        return (
            <Router>
                <Header user={this.state.user} logout={this.logout}/>
                <Switch>
                    <Route exact path='/'>
                        <Main/>
                    </Route>
                    <Route exact path="/Register">
                        <Register/>
                    </Route>
                    <Route exact path='/SignIn'>
                        <SignIn login={this.login}/>
                    </Route>
                    <Route exact path="/product/:title">
                        <ProductDetail/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;