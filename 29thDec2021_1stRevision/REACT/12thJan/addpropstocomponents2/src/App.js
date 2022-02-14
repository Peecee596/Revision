import logo from './logo.svg';
import './App.css';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';

function App() {
  const user={
    username:"Poonam",
    location:"Bhandup",
    hobby:"Timepass"
  }
  return (
    <div className="App">
      <AppHeader username={user.username} location={user.location} hobby={user.hobby}/>
      <AppBody/>
      
    </div>
  );
}

export default App;
