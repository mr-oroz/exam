import {createStore} from 'redux'
import listProducts from "./reduce/list-products";

const store = createStore(listProducts)

export default store;