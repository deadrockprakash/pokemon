import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Sprite = styled.img`
    width:5em,
    height:5em,
    display:none

`;
const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function PokemonCard(props) {
    const url = props.url
    const pokemonName = props.name 
    const quotedUrl = "\""+ url +"\""
    const pokemonIndex = quotedUrl.split("/")[quotedUrl.split("/").length - 2]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?row=true`
    
    return (
      <div className="PokemonCardWrapper">
            <StyledLink to={`pokemon/${pokemonName}`}>
            <Card>
                <div className="card-header">{pokemonIndex}</div>
                <Sprite className="card-img-top rounded mx-auto mt-2" src={imageUrl}></Sprite>
                <div className="card-title">{pokemonName}</div>
            </Card>
            </StyledLink>
      </div>
    )
}

export default PokemonCard
