import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from "../reducers/UserReducer";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_USERS});
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({type: FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: FETCH_USERS_ERROR, payload: "FETCHING USERS ERROR"})
        }
    }
}