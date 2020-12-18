import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


class ProductDetail extends Component {
    state = {
        item: {},
        loading: true
    }

    componentDidMount() {
        this.getItem()
    }

    getItem = () => {
        const url = (new URLSearchParams(this.props.location.search)).get("url")
        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({ item: data,loading:false })
        }
        )
    }

    render() {
        const { item,loading } = this.state
        if (loading) {
            return <p>Loading</p>
        }
        return (
            <div className="container">
                <div className='row'>
                    <h2>{item.title}</h2>
                    <img src={item.images[0].original}/>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({ data }) => ({ data }))(ProductDetail));