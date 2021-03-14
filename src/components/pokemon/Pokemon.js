import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {GetPokemon} from "../action/PokemonAction"
import __ from "lodash"


const Pokemon = (props) =>
{
    const pokemonName = props.match.params.pokemon
    const dispatch = useDispatch()
    const pokemon = useSelector(state=>state.Pokemon)


    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    console.log(pokemon)
    

    const showData = ()=>{
        if(!__.isEmpty(pokemon.data[pokemonName]))
        {
            const pokemonData = pokemon.data[pokemonName]
            return(
                <div className="pokemon-wrapper">
                       <div className="header ">
                           {pokemonName.toUpperCase()}
                       </div>
                       <div className="body">
                            <h1>Sprites</h1>
                            <img src={pokemonData.sprites.front_default} alt=""/>
                            <img src={pokemonData.sprites.back_default} alt=""/>
                             <img src={pokemonData.sprites.front_shiny} alt=""/>
                            <img src={pokemonData.sprites.back_shiny} alt=""/>
                         </div>        
                           <div className="title">
                                <h1>Stats</h1>
                                    {pokemonData.stats.map(el => {
                                    return <p>{el.stat.name} {el.base_stat}</p>
                                 })}
                           </div>
                       </div>
                
            )
        }

        if(pokemon.loading)
        {
            return<p>Loading data</p>
        }
        if(pokemon.errMessage!=="")
        {
            return<p>{pokemon.errMessage}</p>
        }
        return <p>unable to getdata</p>
    }

    return(
        <div>
            Pokemon
            {showData()}
        </div>
    )
}

export default Pokemon