import React , {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import {GetPokemonAction} from "../action/PokemonAction"
import PokemonCard from "../layout/PokemonCard"

const PokemonList = (props) =>
{
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    const [search, setSearch] = useState("");
    const [countOffset, setcountOffset] = useState(0);
    const [countLimit , setcountLimit]  = useState(0)
    
    
    const [selectValue, setSelectValue] = useState("Name")
    
    
    console.log(pokemonList.data)
    useEffect(() => {
        dispatch(GetPokemonAction(countOffset, countLimit ))
    }, [])

    
      function handleOnChange(e) {
          
        setSelectValue(e.target.value)
    }
    

    const showPokemonList=() =>{
        if(!_.isEmpty(pokemonList.data))
        {
            return  pokemonList.data.results.map(
                        element1 =>{
                            return<div>
                                        <PokemonCard
                                        key= {element1.name}
                                        name={element1.name}
                                        url = {element1.url}
                                        />
                                </div>
                        }
                    )
               
        }

        if(pokemonList.loading)
        {
            return<p>Loading data</p>
        }
        if(pokemonList.errMessage!=="")
        {
            return<p>{pokemonList.errMessage}</p>
        }
        return <p>unable to getdata</p>
    }

        console.log(selectValue)
        let url= ''
        if(selectValue==="Name")
        {
            url=`/pokemon/${search}`
        }
        if(selectValue==="Gender")
        {
            url =`/gender/${search}`
        }
        if(selectValue==="Region")
        {
            url=`/region/${search}`
        }
        if(selectValue==="Habitat")
        {
            url=`/habitat/${search}`
        }

        
   
    return(
        <div className="row">
                <div className="searchWrapper">
                        < input type="text" onChange={e => setSearch(e.target.value)}/>
                        <button onClick={() => props.history.push(url)}>Search</button>
                        <select id = "dropdown" value={selectValue}
                                onChange={handleOnChange}>
                            <option value="Name">Name</option>
                            <option value="Gender">Gender</option>
                            <option value="Habitat">Habitat</option>
                            <option value="Region">Region</option>
                        </select>
                </div>
            <div className=" row pokemonListWrapper">
                    {showPokemonList()}

            </div>
            <div className="buttonWrapper">
               
            </div>
        </div>
    )
}

export default PokemonList;
