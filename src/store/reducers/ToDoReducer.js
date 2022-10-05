const defaultState = {
    todos: [],
    loading: false,
    page: 1,
    limit: 10,
    error: null
}

export const FETCH_TODOS = "FETCH_USERS";
export const FETCH_TODOS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_USERS_ERROR";
export const SET_TODO_PAGE = "SET_TODO_PAGE";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {...state, loading: true}
        case FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}