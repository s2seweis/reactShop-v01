
import {
    PLACE_ORDER_INIT, PLACE_ORDER,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL
} from 'constants/constants';

// const initialState = {
//     orderPlaced: false,
//     isLoading: false,
//     error: null,
//     items: []
// }

export default (state = {

    orderPlaced: false,
    isLoading: false,
    error: null,
    items: []
}, action) => {
    switch (action.type) {


        case PLACE_ORDER:
            return {
                ...state,
                items: [...state.items, action.payload],
                orderPlaced: false,
                isLoading: true,
                error: null
            };

        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                orderPlaced: true,
                isLoading: false
            };

        case PLACE_ORDER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };

        default:
            return state;

    }
};


// const reducer = (state = initialState, action) => {
//     const { type, payload } = action

//     switch (type) {
//         case actionTypes.PLACE_ORDER_INIT:
//             return initialState

//         case actionTypes.PLACE_ORDER:
//             return {
//                 ...state,
//                 orderPlaced: false,
//                 isLoading: true,
//                 error: null
//             }

//         case actionTypes.PLACE_ORDER_SUCCESS:
//             return {
//                 ...state,
//                 orderPlaced: true,
//                 isLoading: false
//             }

//         case actionTypes.PLACE_ORDER_FAIL:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: payload.error
//             }

//         default:
//             return state;
//     }
// }

// export default reducer