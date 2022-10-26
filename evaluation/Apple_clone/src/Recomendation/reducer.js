import { RECOMENDATION } from "./action"

const initState={
RecomendationArray:[]
}

 const RecomendationReducer=(state=initState, {type,payload})=>{
    switch(type){
        case RECOMENDATION:{
        return{
            RecomendationArray:payload
        }
        }
        default:{
            return state
        }
    }
}
export default RecomendationReducer;