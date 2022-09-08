import {
    CREATE_LINK_FAILURE,
    CREATE_LINK_REQUEST,
    CREATE_LINK_SUCCESS,
    FETCH_LINK_FAILURE,
    FETCH_LINK_REQUEST,
    FETCH_LINK_SUCCESS
} from "../actions/linkActions";


const initialState = {
    link: [],
    oneNews: null,
    loading: false,
    error: null,
};

const linkReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_LINK_REQUEST:
            return {...state, loading: true};
        case FETCH_LINK_SUCCESS:
            return {...state, loading: false, link: actions.payload};
        case FETCH_LINK_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case CREATE_LINK_REQUEST:
            return {...state, loading: true};
        case CREATE_LINK_SUCCESS:
            return {...state, loading: false};
        case CREATE_LINK_FAILURE:
            return {...state, loading: false, error: actions.payload};
        default:
            return state;
    }
};

export default linkReducer;