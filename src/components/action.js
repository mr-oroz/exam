import Service from "./service";

const service = new Service()

const setRequest = () => {
    return {
        type: 'SET_REQUEST',
    }
}

const loadProduct = (data) => {
    return {
        type: 'LOAD',
        payload: data
    }
}

const getProduct = (dispatch) => (page) => {
    dispatch(setRequest())
    service.getProducts(page).then((data) => {
        dispatch(loadProduct(data))
    })
}



export {getProduct, setRequest}