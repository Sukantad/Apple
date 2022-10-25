export const GET_LOADING='GET_LOADING';
export const GET_CATEGORY='GET_CATEGORY';
export const GET_ERROR='GET_ERROR';
export const SEARCHBAR='SEARCHBAR'
export const getCategoryLoading=()=>({
type:GET_LOADING
})
export const getCategory=(data)=>({
    type:GET_CATEGORY,
    payload:data,
})
export const getCategoryError=()=>({ 
    
        type:GET_ERROR
    
})

export const FetchCategory=()=>(dispatch)=>{
dispatch(getCategoryLoading());
fetch('http://localhost:4000/Category')
.then((res)=> res.json())
.then((res)=>dispatch(getCategory(res)))
.catch(()=>dispatch(getCategoryError()))
}
export const SearchBar=()=>({
  type:SEARCHBAR  
})