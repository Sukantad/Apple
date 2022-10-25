import { legacy_createStore as createStore ,  applyMiddleware,
    combineReducers} from "redux";
import CategoryReducer from "./Redux/reducer";
import thunk from "redux-thunk";
const middlewares = applyMiddleware(thunk);

const RootReducer=combineReducers({
    CategoryState:CategoryReducer
})
export const store=createStore(RootReducer,middlewares);