import {combineReducers } from 'redux'
import PokemonReducer from './PokemonReducer';
import PokemonListReducer from './PokemonListReducer'
import PokemonHabitatReducer from './PokemonHabitatReducer';
import PokemonGenderReducer from './PokemonGenderReducer';
import PokemonRegionReducer from './PokemonRegionReducer';

const RootReducer = combineReducers ({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonReducer,
    PokemonHabitat: PokemonHabitatReducer,
    PokemonGender: PokemonGenderReducer,
    PokemonRegion: PokemonRegionReducer

})

export default RootReducer;