import React, {Component} from 'react';
import ProductItems from "./product-items/product-items";
import {getProduct} from '../../action'
import {connect} from "react-redux";
import PaginationProduct from "../../pagination/pagination";


class Products extends Component {
    componentDidMount() {
        this.getPage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.getPage()
        }
    }

    getPage = () => {
        const {page} = this.props
        this.props.getProduct(page)
    }

    render() {
        return (
            <section>
                <h2>Шапки</h2>
                <ul className="row products">
                    {this.props.data.results.map((item) => (
                        <ProductItems key={item.id} {...item}/>
                    ))}
                </ul>
                <PaginationProduct page={this.props.page} count={this.props.data.count}/>
            </section>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {data}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: getProduct(dispatch),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Products);