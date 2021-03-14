import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokemonHabitat } from '../action/PokemonAction'
const  PokemonHabitat =(props)=>
{
     const pokemonName = props.match.params.pokemon
    const dispatch = useDispatch()
    const pokemon = useSelector(state=>state.PokemonHabitat)

    useEffect(() => {
       dispatch(GetPokemonHabitat(pokemonName))
    }, [])
    
    const showData = ()=>
    {
        
        if(!_.isEmpty(pokemon.data))
        {
            console.log(pokemon.data)
            return<div className='habitatWrapper'>
                <div>{pokemon.data.name}</div>
                <div>
                    {pokemon.data.names.map(element=>{
                       return <p>{element.name}</p> 
                    })}
                </div>
                <div>
                    <h1>species</h1>
                    {pokemon.data.pokemon_species.map(element=>{
                       return <p>{element.name}</p> 
                    })}
                </div>
            </div>
            
        }
    }

    return(
        <div>
                Pokemon-Habitat
                {showData()}
        </div>
    )
}

export default PokemonHabitat