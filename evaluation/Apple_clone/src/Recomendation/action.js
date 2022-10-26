export const RECOMENDATION='RECOMENDATION'
export const RecomendationAction=(data)=>(
    {
      type:RECOMENDATION,
      payload:data,
    }
  )
export const Recomendation=(searchVal)=>(dispatch)=>{
    const url="http://localhost:4000/phones"
        fetch(`${url}?_limit=5&q=${searchVal}`)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(RecomendationAction(res))
          console.log(res, " search input data after fetched sukanta ");
          console.log(searchVal,"test for input")
        })
      
  }