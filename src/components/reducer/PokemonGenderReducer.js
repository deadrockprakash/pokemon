const defaultState ={
    loading: false,
    data:[],
    errMessage:''
}

const PokemonGenderReducer = (state =defaultState,action)=>{
    switch(action.type)
    {
        case "POKEMONGENDER_LOADING":
            return{
                ...state,
                loading:true,
                errMessage:''
            }

        case "POKEMONGENDER_SUCCESS":
            return{
                ...state,
                loading:false,
                errMessage:'',
                data:action.payload.pokemon_species_details
            }

        case "POKEMONGENDER_FAIL":
            return{
                ...state,
                loading:false,
                errMessage:'Error Occurs during loading data'
            }
         default:
            return ""
    }

}

export default PokemonGenderReducer;