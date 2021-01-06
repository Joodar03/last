import reduce from "../reduxe";
import thunk from "react-thunk";
import {applyMiddleware, createStore} from "redux";

const store = createStore(reduce, applyMiddleware(thunk))

export default store;