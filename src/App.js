import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import {Switch, Route, Redirect, NavLink, Link} from 'react-router-dom';
import PokemonList from './components/pokemon/PokemonList';
import Pokemon from './components/pokemon/Pokemon';
import PokemonHabitat from './components/pokemon/PokemonHabitat';
import PokemonGender from './components/pokemon/PokemonGender';
import PokemonRegion from './components/pokemon/PokemonRegion';
function App() {
  return (
    <div className="App">
      <nav>
      </nav>
      
      <Switch>
        <Route exact path = {'/'}  component={PokemonList}/>
        <Route exact path = {'/pokemon/:pokemon'}  component={Pokemon}/>
        <Route exact path = {'/gender/:pokemon'}  component={PokemonGender}/>
        <Route exact path = {'/habitat/:pokemon'}  component={PokemonHabitat}/>
        <Route exact path = {'/region/:pokemon'}  component={PokemonRegion}/>
        <Redirect to={'/'}/>
      </Switch> 
      
    </div>
  );
}

export default App;
