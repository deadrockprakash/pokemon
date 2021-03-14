import axios from 'axios';

export const  GetPokemonAction = (offset,limit)=> async dispatch=>{
    
    try {
        dispatch({
            type:"LOADING_POKEMONLIST"
        });

        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?${offset}=20&${limit}=20`)
        dispatch({
            type:"SUCCESS_POKEMONLIST",
            payload:result.data
        })
        
    } catch (e) {
        dispatch({
            type:"ERROR_POKMONLIST"
        })
        
    }
  
};

export const GetPokemon = (pokemon) => async dispatch =>{
    try {
        dispatch({
            type:"POKEMON_LOADING"
        })
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type:"POKEMON_SUCCESS",
            payload:response.data,
            pokemonName:pokemon
        })
        
    } catch (error) {
        dispatch({
            type:"POKEMON_FAIL"
        })
    }

};

export const GetPokemonHabitat = (pokemon) => async dispatch =>{
    console.log("pokemon",pokemon)
    try {
        dispatch({
            type:"POKEMONHABITAT_LOADING"
        })
        console.log(pokemon)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${pokemon}`)
        console.log(response)
        dispatch({
            type:"POKEMONHABITAT_SUCCESS",
            payload:response.data,
            pokemonName:pokemon
        })
        
    } catch (error) {
        dispatch({
            type:"POKEMONHABITAT_FAIL"
        })
    }

};

export const GetPokemonGender = (gender) => async dispatch =>{
    try {
        dispatch({
            type:"POKEMONGENDER_LOADING"
        })
        const response = await axios.get(`https://pokeapi.co/api/v2/gender/${gender}`)
        dispatch({
            type:"POKEMONGENDER_SUCCESS",
            payload:response.data,
            pokemonName:gender
        })
        
    } catch (error) {
        dispatch({
            type:"POKEMONGENDER_FAIL"
        })
    }

};

export const GetPokemonRegion = (pokemon) => async dispatch =>{
    try {
        dispatch({
            type:"POKEMONREGION_LOADING"
        })
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/encounters`)
        dispatch({
            type:"POKEMONREGION_SUCCESS",
            payload:response.data
        })
        
    } catch (error) {
        dispatch({
            type:"POKEMONREGION_FAIL"
        })
    }

};

