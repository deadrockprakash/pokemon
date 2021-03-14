import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokemonRegion } from '../action/PokemonAction'


function PokemonRegion(props) {
    const pokemonId = props.match.params.pokemon
    const dispatch = useDispatch()
    const pokemonRegion = useSelector(state=>state.PokemonRegion)

    useEffect(() => {
       dispatch(GetPokemonRegion(pokemonId))
    }, [])

    const showData= ()=>{
        if(!_.isEmpty(pokemonRegion.data))
        {
            return<div>
                {pokemonRegion.data.map( element =>{
                    return<div>
                        <div>{element.location_area.name}</div>

                    </div>
                })}
            </div>
        }


    }

    
    console.log(pokemonRegion.data)
    return ( 
        <div>
            {showData()}
        </div>
    )
}

export default PokemonRegion
