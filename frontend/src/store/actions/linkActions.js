import axiosApi from "../../axiosApi";

export const FETCH_LINK_REQUEST = 'FETCH_LINK_REQUEST';
export const FETCH_LINK_SUCCESS = 'FETCH_LINK_SUCCESS';
export const FETCH_LINK_FAILURE = 'FETCH_LINK_FAILURE';

export const CREATE_LINK_REQUEST = 'CREATE_LINK_REQUEST';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';
export const CREATE_LINK_FAILURE = 'CREATE_LINK_FAILURE';

const fetchLinkRequest = () => ({type: FETCH_LINK_REQUEST});
const fetchLinkSuccess = link => ({type: FETCH_LINK_SUCCESS, payload: link});
const fetchLinkFailure = error => ({type: FETCH_LINK_FAILURE, payload: error});

const createLinkRequest = () => ({type: CREATE_LINK_REQUEST});
const createLinkSuccess = link => ({type: CREATE_LINK_SUCCESS, payload: link});
const createLinkFailure = error => ({type: CREATE_LINK_FAILURE, payload: error});

export const getLink = () => {
    return async dispatch => {
        try {
            dispatch(fetchLinkRequest());

            const response = await axiosApi(`/`);
            dispatch(fetchLinkSuccess(response.data));
        } catch (e) {
            dispatch(fetchLinkFailure(e.message));
        }
    }
};

export const createLink = (data) => {
    return async dispatch => {
        try {
            dispatch(createLinkRequest());
            const response = await axiosApi.post('/links', data);
            dispatch(createLinkSuccess(response.data));
        } catch (e) {
            dispatch(createLinkFailure(e.message));
            throw e;
        }
    }
};

