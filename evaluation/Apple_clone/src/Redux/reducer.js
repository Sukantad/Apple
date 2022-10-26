import { GET_CATEGORY, GET_ERROR, GET_LOADING, SEARCHBAR } from "./action"

const initState={
    loading:false,
    error:false,
    Search:false,
    Category:[],
    
}
const CategoryReducer=(state=initState, {type,payload})=>{
switch(type){
    case GET_LOADING:{
        return{
            loading:true,
            error:false,
            Category:[]
        }
    }
    case GET_CATEGORY:{
        return{
            loading:false,
            error:false,
            Category:payload
        }
    }
    case SEARCHBAR:{
        return {
             ...state, Search:!state.Search,
            // ...state, Search:payload.data

        }
    }
    case GET_ERROR:{
        return{
            loading:false,
            error:true,
            Category:[]
        }
    }
    default:{
        return state;
    }
}

}
export default CategoryReducer;