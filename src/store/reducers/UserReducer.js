const defaultState = {
    users: [],
    loading: false,
    error: null

}

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {loading: true, error: null, users: []}
        case FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}

export const fetchUsersAction = (payload) => ({type: FETCH_USERS, payload: payload});

