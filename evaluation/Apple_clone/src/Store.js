import { legacy_createStore as createStore ,  applyMiddleware,
    combineReducers} from "redux";
import CategoryReducer from "./Redux/reducer";
import thunk from "redux-thunk";
import RecomendationReducer from "./Recomendation/reducer";
const middlewares = applyMiddleware(thunk);

const RootReducer=combineReducers({
    CategoryState:CategoryReducer,
    RecomendationState:RecomendationReducer
})
export const store=createStore(RootReducer,middlewares);