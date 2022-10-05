import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {counterReducer} from "./reducers/CounterReducer";
import {userReducer} from "./reducers/UserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {todoReducer} from "./reducers/ToDoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));