const defaultState = {
    loading:false,
    errMessage:"",
    data:[]
}

const PokemonRegionReducer = (state=defaultState,action)=>
{
    
        switch(action.type)
        {
            case "POKEMONREGION_LOADING":
                return{
                    ...state,
                    loading:true,
                    errMessage:''
                }
    
            case "POKEMONREGION_SUCCESS":
                return{
                    ...state,
                    loading:false,
                    errMessage:'',
                    data:action.payload
                }
    
            case "POKEMONREGION_FAIL":
                return{
                    ...state,
                    loading:false,
                    errMessage:'Error Occurs during loading data'
                }
             default:
                return ""
        }
}

export default PokemonRegionReducer