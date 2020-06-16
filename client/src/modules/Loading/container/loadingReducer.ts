import * as types from './types';


const initialState: types.loadingState = {
    isLoading: false
}

const loadingReducer = (state = initialState, action: types.LoadingTypes) => {
    switch(action.type){
        case types.HIDDEN_LOADING:
            return { ...state, isLoading: action.payload.isLoading };
        case types.SHOW_LOADING:
            return { ...state, isLoading: action.payload.isLoading };
        default:
            return { ...state }
    }
}

export default loadingReducer;