import React, {useState} from 'react'
import Pokemon from '../pokemon/Pokemon';

function NavBar(props) {
    
    const [pokemonName, setSearch] = useState("");
    console.log(props)

    
    
    return (
        <div >
           <nav class="navbar navbar-expand-lg navbar-dark  bg-dark fixed-top">
           <a class="navbar-brand " href="/">Pokemon</a>
           <div className="search">
                <input type="text" onChange={e => setSearch(e.target.value)}/>
                <button>Search</button>
           </div>
            </nav> 
        </div>
    )
}

export default NavBar;
