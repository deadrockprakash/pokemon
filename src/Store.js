import { createStore  } from "redux"
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from "./components/reducer/RootReducer"

const Store = createStore ( RootReducer ,composeWithDevTools(applyMiddleware(thunk)))

export default Store
