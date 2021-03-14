import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GetPokemonGender } from '../action/PokemonAction'
import _ from 'lodash'


function PokemonGender(props) {
    const pokGender = props.match.params.pokemon
    const dispatch = useDispatch()
    const pokemonGender = useSelector(state=>state.PokemonGender)

    useEffect(() => {
       dispatch(GetPokemonGender(pokGender))
    }, [])

    console.log(pokemonGender.data)
    const showData=()=>{
        if(!_.isEmpty(pokemonGender.data)){
                return<div className="genderWrapper">
                    {pokemonGender.data.map(element=>{
                        return<div className = "subWrapper">
                                <div>{element.rate}</div>
                                <div>{element.pokemon_species.name}</div>
                            </div>
                    })}
                </div>
        }
    }
    return (
        <div>
            <div>
                {showData()}
            </div>
        </div>
    )
}

export default PokemonGender
