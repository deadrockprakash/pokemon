const defaultState={
    loading:false,
    data:{},
    errMessage:''
}

const PokemonReducer = (state=defaultState,action)=>{
    switch(action.type)
    {
        case "POKEMON_LOADING":
            return{
                ...state,
                loading:true,
                errMessage:''
            }

            case "POKEMON_SUCCESS":
                return{
                    ...state,
                    loading:false,
                    data:{
                        ...state,
                        [action.pokemonName]:action.payload
                    },
                    errMessage:''
                }
            
                case "POKEMON_FAIL":
                    return{
                        ...state,
                        loading:false,
                        errMessage:'Unable to load data'
                    }
    }
    return state
}

export default PokemonReducer