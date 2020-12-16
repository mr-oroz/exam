import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class ProductDetail extends Component {
    state = {
        item: {},
    }

    componentDidMount() {
        const url = (new URLSearchParams(this.props.location.search)).get("url")
        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({ item: data })
        }
        )
    }

    render() {
        return (
            <div className="container">
                <div className='mt-2 col-lg-4 col-md-6 mb-4'>
                    <h2>{this.state.item.title}</h2>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({ data }) => ({ data }))(ProductDetail));