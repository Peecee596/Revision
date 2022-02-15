import logo from './logo.svg';
import './App.css';
import {Switch,Route}from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Players from './components/Players';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Football Club</h1>
      <Navigation/>
        <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/players" component={Players}/>

        </Switch>
      
      
    </div>
  );
}

export default App;
