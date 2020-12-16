import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";


class ProductDetail extends Component {
    state = {
        item: {}
    }

    componentDidMount() {
        const url = (new URLSearchParams(this.props.location.search)).get("url")
        fetch(url).then((res) => res.json()).then((data) => {
                console.log(data)
                this.setState({item: data})
            }
        )
    }

    render() {
        return (
            <div className="container">
                <div className='mt-2 col-lg-4 col-md-6 mb-4'>
                    <Card className='h-100'>
                        <Card.Img variant="top"
                                  src={this.state.images[0].original}/>
                        <Card.Body>
                            <Card.Title>
                                <a href='#'>{this.state.title}</a>
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
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({data}) => ({data}))(ProductDetail));