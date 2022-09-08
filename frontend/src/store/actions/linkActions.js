import axiosApi from "../../axiosApi";

export const CREATE_LINK_REQUEST = 'CREATE_LINK_REQUEST';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';
export const CREATE_LINK_FAILURE = 'CREATE_LINK_FAILURE';

const createLinkRequest = () => ({type: CREATE_LINK_REQUEST});
const createLinkSuccess = link => ({type: CREATE_LINK_SUCCESS, payload: link});
const createLinkFailure = error => ({type: CREATE_LINK_FAILURE, payload: error});

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

