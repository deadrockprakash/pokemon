const defaultState ={
    loading: false,
    data:{},
    errMessage:'',
    count:0
}

const PokemonListReducer = (state =defaultState,action)=>{
    switch(action.type)
    {
        case "LOADING_POKEMONLIST":
            return{
                ...state,
                loading:true,
                errMessage:''
            }

        case "SUCCESS_POKEMONLIST":
            return{
                ...state,
                loading:false,
                errMessage:'',
                data: action.payload,
                count: action.payload.count
            }

        case "ERROR_POKMONLIST":
            return{
                ...state,
                loading:false,
                errMessage:'Error Occurs during loading data'
            }
         default:
            return ""
    }

}

export default PokemonListReducer;