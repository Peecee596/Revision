import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Players from './Components/Players';
import Navigation from './Components/Navigation';
import { Component } from 'react';
import Services from './Components/Services';
class App extends Component{
  state={
    players:[
      {
        'id':1,
        'name':"Ronaldo",
        "desc":"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team"
      },
      {
        'id':2,
        'name':"Messi",
        "desc":"Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team"
      },
      {
        'id':3,
        'name':"Pogba",
        'desc':'Paul Labile Pogba is a French professional footballer who plays for Premier League club Manchester United and the France national team. He operates primarily as a central midfielder, but can also be deployed as a left winger, attacking midfielder, defensive midfielder and deep-lying playmaker'
      }
    ]
  }
  render(){    
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={()=><About/>}/>
        <Route exact path='/services' component={()=><Services name="Coaching"/>}/>
        <Route exact path="/players" render={(props)=><Players {...props} players={this.state.players} />}/>
      </Switch>
      
    </div>
  );
}
}

export default App;
