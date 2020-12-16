const initialState = {
    data: {
        count: 0,
        results: []
    }
}

const listProducts = (state = initialState, action) => {

    switch (action.type) {
        case "LOAD" : {
            return {data: action.payload, loading: false}
        }
        default: {
            return state
        }
    }
}

export default listProducts