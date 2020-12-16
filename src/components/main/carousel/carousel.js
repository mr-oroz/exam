import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";


class CarouselItem extends Component {
    render() {
        return (
            <Carousel className='my-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placehold.it/900x350"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placehold.it/900x350"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placehold.it/900x350"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselItem;