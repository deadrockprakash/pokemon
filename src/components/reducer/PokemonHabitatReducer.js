const defaultState ={
    loading: false,
    data:[],
    errMessage:''
}

const PokemonHabitatReducer = (state =defaultState,action)=>{
    switch(action.type)
    {
        case "POKEMONHABITAT_LOADING":
            return{
                ...state,
                loading:true,
                errMessage:''
            }

        case "POKEMONHABITAT_SUCCESS":
            return{
                ...state,
                loading:false,
                errMessage:'',
                data:action.payload
            }

        case "POKEMONHABITAT_FAIL":
            return{
                ...state,
                loading:false,
                errMessage:'Error Occurs during loading data'
            }
         default:
            return ""
    }

}

export default PokemonHabitatReducer;