import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Category from "./category";
import CarouselItem from "./carousel/carousel";
import Products from "./products";
import {withRouter} from "react-router-dom";


class Main extends Component {
    render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const page = +searchParams.get("page") || 1
        return (
            <main>
                <Container>
                    <Row>
                        <Category/>
                        <div className='col-lg-9'>
                            <CarouselItem/>
                            <Products page={page}/>
                        </div>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default withRouter(Main);