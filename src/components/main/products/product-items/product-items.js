import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './index.css'

class ProductItems extends Component {
    render() {
        const {title, images, url} = this.props
        return (
            <div className='col-lg-4 col-md-6 mb-4'>
                <Link to={`product/${this.props}?url=` + url}>
                    <Card className='h-100'>
                        <Card.Img variant="top"
                                  src={images[0].original}/>
                        <Card.Body>
                            <Card.Title>
                                <a href='#'>{title}</a>
                            </Card.Title>
                            <h5>$24.99</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>★ ★ ★ ★ ☆</small>
                        </Card.Footer>
                    </Card>
                </Link>
            </div>

        );
    }
}

export default ProductItems;