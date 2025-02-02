import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_ORDER_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: action.orders
            })
        case actionTypes.FETCH_ORDER_FAIL:
            return updateObject(state, { loading: false });
        case actionTypes.FETCH_ORDER_INIT:
            return updateObject(state, { loading: true })
        case actionTypes.INIT_PURCHASE:
            return updateObject(state, { purchased: false });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, { id: action.orderID });
            console.log(action.orderID)
            return updateObject(state, {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            });
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
}

export default reducer;