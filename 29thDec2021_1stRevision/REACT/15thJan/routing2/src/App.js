import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
function App() {
   return (
    <div className="App">
      <Navigation/>
      <Switch>      
        <Route exact path='/about' component={About}/>
        <Route exact path='/'component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
      
    </div>
  );
}

export default App;
